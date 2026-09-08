import { cpSync, existsSync, readdirSync, readFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, join } from 'node:path';
import assert from 'node:assert/strict';
const root = fileURLToPath(new URL('../', import.meta.url));
const candidates = ['website/dist/client','website/out','website/dist'];
const source = candidates.map(p=>resolve(root,p)).find(p=>existsSync(join(p,'index.html')));
assert(source,'No completed static export with index.html');
const target = resolve(root,'dist');
if(existsSync(target)&&readdirSync(target).length) {
  throw new Error('Root dist already exists. Move this generated output aside before restaging to avoid stale assets.');
}
mkdirSync(target,{recursive:true});
cpSync(source,target,{recursive:true});
const html=readFileSync(join(target,'index.html'),'utf8');
assert(html.includes('Physical AGI'),'Missing site title');
assert(existsSync(join(target,'paper/physical-agi.pdf')),'Missing manuscript PDF');
assert(!existsSync(join(target,'server')),'Server intermediates must not be public');
for (const path of ['archive','bibliography','node_modules','.git','.env']) assert(!existsSync(join(target,path)),'Nonpublic material staged: '+path);
console.log('Static assets staged from '+source+' to '+target);
