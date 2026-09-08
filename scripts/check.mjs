import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const read = p => readFileSync(resolve(root,p));
const papers = JSON.parse(read('data/papers.json'));
const project = JSON.parse(read('data/project.json'));
const sha = b => createHash('sha256').update(b).digest('hex');
const groups = new Set(project.groups.map(g=>g.id));
const keys = new Set(papers.map(p=>p.key));
assert.equal(keys.size,papers.length,'Duplicate citation keys');
assert.equal(papers.length,157,'Update snapshot provenance explicitly when changing its scope');
assert.equal(papers.filter(p=>p.featured).length,20);
const statuses = new Set(['matched','matched_metadata_review','citation_only','no_exact_result','blocked_attempted','unsearched']);
for (const p of papers) {
  assert(groups.has(p.group),p.key+' has invalid group');
  assert(statuses.has(p.scholarStatus),p.key+' has invalid verification status');
  assert(!/[\\$]/.test(p.title),p.key+' has raw LaTeX in its display title');
  assert(p.title&&p.bibTitle&&typeof p.bibYear==='string',p.key+' lacks source metadata');
  if(!p.bibYear) assert(['liigibson','liu2024ok','srivastavabehavior'].includes(p.key)&&p.version.includes('not supplied'),p.key+' has an unmarked missing year');
  assert.equal(new URL(p.discoveryUrl).hostname,'scholar.google.com');
  if (p.url) { assert.equal(new URL(p.url).protocol,'https:'); assert(!p.url.includes('scholar.google'),p.key+' uses a query as paper URL'); }
  if (p.featured) { assert(p.url&&p.summary&&p.sourceChecked,p.key+' lacks featured evidence'); assert(p.scholarStatus.startsWith('matched'),p.key+' has no recorded linked Scholar match'); }
}
const expected = {matched:80,matched_metadata_review:10,citation_only:1,no_exact_result:2,blocked_attempted:3,unsearched:61};
for (const [status,count] of Object.entries(expected)) assert.equal(papers.filter(p=>p.scholarStatus===status).length,count,status);
assert.equal(project.benchmarks.length,4);
for (const b of project.benchmarks) { assert(keys.has(b.key)); assert(b.unit&&b.location&&b.caveat); assert.equal(new URL(b.url).protocol,'https:'); }
assert.equal(sha(read('bibliography/custom.bib')),'d8e255a0c5f62553dd6e20b0b4ab9215067bec80e89a754d8f7b85b5ea936bad','Preserved bibliography changed');
assert.equal(sha(read('website/public/paper/physical-agi.pdf')),'a2ff5d72885875cd8453beea74d4c08be42c302e363c657bc1d17230428ec1a8','Manuscript PDF changed: update provenance');
const base = 'cd1cb16428fa4504f81572886f526129281ffbeb';
const original = execFileSync('git',['ls-tree','-r','--name-only',base],{cwd:root,encoding:'utf8'}).trim().split('\n').filter(p=>p!=='.gitignore');
for (const p of original) assert.equal(sha(read('archive/acl-draft/'+p)),sha(execFileSync('git',['show',base+':'+p],{cwd:root})),p+' was not archived byte-for-byte');
const bib = read('bibliography/custom.bib').toString()+read('bibliography/additions.bib').toString();
for (const p of papers) assert(bib.includes('{'+p.key+','),p.key+' not in preserved bibliography');
const page = read('website/app/page.tsx').toString();
assert(page.includes(project.manuscriptTitle.split(' towards ')[0]));
assert(!/First Author|Untitled site|Your site is taking shape|Anonymous ACL submission/.test(page));
for (const p of ['README.md','docs/CATALOG.md','docs/BENCHMARKS.md']) {
 const md=read(p).toString();
 for(const [,target] of md.matchAll(/\]\(([^)]+)\)/g)) {
  if (/^(https?:|#)/.test(target)) continue;
  const filename=target.split('#')[0];
  if(filename) readFileSync(resolve(root,p,'..',filename));
 }
}
console.log('PASS: 157 unique citations; 20 selected sources; 4 benchmark units; 22 original files preserved; bibliography and PDF hashes; Markdown local links.');
