// Import primary-source link audits without changing inherited citation metadata.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dest=path.join(root,'data/papers.json');
const papers=JSON.parse(fs.readFileSync(dest));
const byKey=new Map(papers.map(p=>[p.key,p]));
const array=x=>x ? (Array.isArray(x)?x:[x]) : [];
for(const file of process.argv.slice(2)) {
 const input=JSON.parse(fs.readFileSync(file));
 const records=Array.isArray(input)?input:input.records;
 for(const r of records) {
   const p=byKey.get(r.key);
   if(!p) throw new Error('Not a cited key: '+r.key);
   p.resources=Object.fromEntries(['github','huggingface','homepage'].map(k=>[k,array(r[k])]));
   p.resourceAudit={checkedOn:r.checkedOn||'2026-09-16',evidence:array(r.evidence),notes:r.notes||null};
   // An audited source may fill a missing URL, but never silently replace a cited version.
   if(!p.url&&r.paper) p.url=r.paper;
 }
}
fs.writeFileSync(dest,JSON.stringify(papers,null,2)+'\n');
console.log('Resource audits merged; existing BibTeX and Scholar records preserved.');
