// Optional live reachability audit; deliberately not a network-dependent CI gate.
// HTTP availability does not verify a resource's identity, claims or completeness.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const papers=JSON.parse(fs.readFileSync(path.join(root,'data/papers.json')));
const urls=[...new Set(papers.flatMap(p=>Object.values(p.resources).flat()))].sort();
const exec=promisify(execFile),results=[];
const reportPath=path.join(root,'data/resource-health.json');
const previous=process.argv.includes('--retry-failed')&&fs.existsSync(reportPath)?JSON.parse(fs.readFileSync(reportPath)):null;
const cached=new Map((previous?.results||[]).map(r=>[r.url,{...r,checkedAt:r.checkedAt||previous.checkedAt}]));
let next=0;
async function worker() {
 while(next<urls.length) {
  const url=urls[next++];
  if(cached.get(url)?.status===200) { results.push(cached.get(url)); continue; }
  const checkedAt=new Date().toISOString();
  try {
   const {stdout}=await exec('curl',['-L','-sS','-o','/dev/null','-w','%{http_code}\n%{url_effective}','--max-time','20',url],{timeout:22000,maxBuffer:16384});
   const [status,finalUrl]=stdout.trim().split('\n');
   results.push({url,status:Number(status),finalUrl,checkedAt});
  } catch(e) { results.push({url,status:null,error:e.killed?'timeout':'request failed',checkedAt}); }
 }
}
await Promise.all(Array.from({length:6},worker));
results.sort((a,b)=>a.url.localeCompare(b.url));
const report={checkedAt:new Date().toISOString(),scope:'GitHub, Hugging Face and homepage URLs only; not paper paywalls or Scholar',method:'Unauthenticated HTTP GET with redirects; six workers; 20-second timeout',note:'Reachability is separate from the per-paper primary-source identity evidence. Non-200 responses can be temporary or access-control errors.',count:urls.length,results};
fs.writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({checked:urls.length,ok:results.filter(x=>x.status===200).length,exceptions:results.filter(x=>x.status!==200)},null,2));
