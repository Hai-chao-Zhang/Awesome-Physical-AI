import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { parseBib } from './catalog-lib.mjs';
const root = fileURLToPath(new URL('../', import.meta.url));
const read = p => readFileSync(resolve(root,p));
const papers = JSON.parse(read('data/papers.json'));
const project = JSON.parse(read('data/project.json'));
const manifest = JSON.parse(read('data/catalog-manifest.json'));
const sha = b => createHash('sha256').update(b).digest('hex');
const groups = new Set(project.groups.map(g=>g.id));
const keys = new Set(papers.map(p=>p.key));
assert.equal(keys.size,papers.length,'Duplicate citation keys');
assert.equal(papers.length,165,'Update snapshot provenance explicitly when changing its scope');
assert.deepEqual([...keys].sort(),manifest.citedKeys);
assert.equal(manifest.count,papers.length);
assert.equal(sha(read('docs/assets/framework.svg')),manifest.frameworkSvgSha256);
const categories = new Set(project.catalogCategories.map(c=>c.id));
assert.equal(categories.size,8);
assert.equal(papers.filter(p=>p.featured).length,20);
const statuses = new Set(['matched','matched_metadata_review','citation_only','no_exact_result','blocked_attempted','unsearched']);
for (const p of papers) {
  assert(groups.has(p.group),p.key+' has invalid group');
  assert(categories.has(p.category),p.key+' has invalid README category');
  assert(statuses.has(p.scholarStatus),p.key+' has invalid verification status');
  assert(!/[\\$]/.test(p.title),p.key+' has raw LaTeX in its display title');
  assert(p.title&&p.bibTitle&&typeof p.bibYear==='string',p.key+' lacks source metadata');
  assert(p.url,p.key+' lacks a paper or original-source entry point');
  assert(p.resourceAudit?.evidence?.length,p.key+' lacks an explicit resource audit');
  if(!p.bibYear) assert(['liigibson','liu2024ok','srivastavabehavior'].includes(p.key)&&p.version.includes('not supplied'),p.key+' has an unmarked missing year');
  assert.equal(new URL(p.discoveryUrl).hostname,'scholar.google.com');
  if (p.url) { assert.equal(new URL(p.url).protocol,'https:'); assert(!p.url.includes('scholar.google'),p.key+' uses a query as paper URL'); }
  if (p.featured) { assert(p.url&&p.summary&&p.sourceChecked,p.key+' lacks featured evidence'); assert(p.scholarStatus.startsWith('matched'),p.key+' has no recorded linked Scholar match'); }
  for(const type of ['github','huggingface','homepage']) {
    assert(Array.isArray(p.resources[type]),p.key+' lacks '+type+' field');
    for(const link of p.resources[type]) {
      const u=new URL(link);
      assert.equal(u.protocol,'https:');
      if(type==='github') { assert.equal(u.hostname,'github.com'); assert(u.pathname.split('/').filter(Boolean).length>=2); }
      if(type==='huggingface') { assert.equal(u.hostname,'huggingface.co'); assert(!u.pathname.startsWith('/papers/')); }
      assert(p.resourceAudit?.evidence?.length,p.key+' lacks resource evidence');
    }
  }
}
const expected = {matched:82,matched_metadata_review:10,citation_only:1,no_exact_result:8,blocked_attempted:3,unsearched:61};
for (const [status,count] of Object.entries(expected)) assert.equal(papers.filter(p=>p.scholarStatus===status).length,count,status);
assert.equal(project.benchmarks.length,4);
for (const b of project.benchmarks) { assert(keys.has(b.key)); assert(b.unit&&b.location&&b.caveat); assert.equal(new URL(b.url).protocol,'https:'); }
assert.equal(sha(read('bibliography/custom.bib')),'d8e255a0c5f62553dd6e20b0b4ab9215067bec80e89a754d8f7b85b5ea936bad','Preserved bibliography changed');
assert.equal(sha(read('website/public/paper/physical-agi.pdf')),'a2ff5d72885875cd8453beea74d4c08be42c302e363c657bc1d17230428ec1a8','Manuscript PDF changed: update provenance');
const base = 'cd1cb16428fa4504f81572886f526129281ffbeb';
const original = execFileSync('git',['ls-tree','-r','--name-only',base],{cwd:root,encoding:'utf8'}).trim().split('\n').filter(p=>p!=='.gitignore');
for (const p of original) assert.equal(sha(read('archive/acl-draft/'+p)),sha(execFileSync('git',['show',base+':'+p],{cwd:root})),p+' was not archived byte-for-byte');
const entries = Object.entries(manifest.bibliographyHashes).flatMap(([file,hash])=>{
  const bytes=read('bibliography/'+file); assert.equal(sha(bytes),hash,file+' changed');
  return parseBib(bytes.toString(),file);
});
assert.equal(entries.length,manifest.bibliographyEntries);
const byKey = new Map(entries.map(e=>[e.key,e]));
const readme=read('README.md').toString();
for (const p of papers) {
  assert(byKey.has(p.key),p.key+' not in preserved bibliography');
  assert.equal(read(p.citationFile).toString(),byKey.get(p.key).raw+'\n',p.key+' BibTeX altered');
  assert.equal(readme.split('id="paper-'+p.key+'"').length-1,1,p.key+' missing/duplicated in README');
}
assert.equal(read('bibliography/cited.bib').toString(),manifest.citedKeys.map(k=>byKey.get(k).raw).join('\n\n')+'\n');
const inherited=JSON.parse(execFileSync('git',['show','ab1ca27:data/papers.json'],{cwd:root,encoding:'utf8'}));
for(const p of inherited) {
 const current=papers.find(q=>q.key===p.key);
 for(const field of ['bibTitle','bibYear','scholarStatus','scholarNote','scholarEvidenceUrl'])
   assert.deepEqual(current[field],p[field],p.key+' changed inherited '+field);
}
const page = read('website/app/page.tsx').toString();
assert(page.includes(project.manuscriptTitle.split(' towards ')[0]));
assert(!/First Author|Untitled site|Your site is taking shape|Anonymous ACL submission/.test(page));
for (const p of ['README.md','docs/CATALOG.md','docs/BENCHMARKS.md','docs/RESOURCE-LINKS.md']) {
 const md=read(p).toString();
 for(const [,target] of md.matchAll(/\]\(([^)]+)\)/g)) {
  if (/^(https?:|#)/.test(target)) continue;
  const filename=target.split('#')[0];
  if(filename) readFileSync(resolve(root,p,'..',filename));
 }
}
console.log('PASS: 165 unique citations in 8 categories; exact per-entry BibTeX; inherited Scholar records unchanged; resource evidence; 20 featured sources; 4 benchmark units; 22 archived files; bibliography and website PDF hashes; Markdown links.');
