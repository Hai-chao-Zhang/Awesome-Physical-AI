import { cpSync, existsSync, readdirSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, join } from 'node:path';
import assert from 'node:assert/strict';
const root = fileURLToPath(new URL('../', import.meta.url));
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
assert(!basePath || /^\/[A-Za-z0-9_-]+$/.test(basePath),'Expected a single GitHub Pages project path');
const candidates = ['website/dist/client','website/out','website/dist'];
const source = candidates.map(p=>resolve(root,p)).find(p=>existsSync(join(p,'index.html')));
assert(source,'No completed static export with index.html');
const target = resolve(root,'dist');
if(existsSync(target)&&readdirSync(target).length) {
  throw new Error('Root dist already exists. Move this generated output aside before restaging to avoid stale assets.');
}
mkdirSync(target,{recursive:true});
// Vinext beta.5 writes path-prefixed assets into a matching subdirectory.
// GitHub Pages already mounts the artifact at basePath, so remove that one
// filesystem prefix while preserving the URL prefix in HTML and JavaScript.
for (const entry of readdirSync(source)) {
  if (basePath && entry === basePath.slice(1)) {
    const prefixed = join(source,entry);
    assert.deepEqual(readdirSync(prefixed),['_next'],'Unexpected files in prefixed asset directory');
    assert(!existsSync(join(source,'_next')),'Conflicting prefixed and root assets');
    cpSync(join(prefixed,'_next'),join(target,'_next'),{recursive:true});
  } else {
    cpSync(join(source,entry),join(target,entry),{recursive:true});
  }
}
writeFileSync(join(target,'.nojekyll'),'');
const html=readFileSync(join(target,'index.html'),'utf8');
assert(html.includes('Physical AGI'),'Missing site title');
assert(existsSync(join(target,'paper/physical-agi.pdf')),'Missing manuscript PDF');
assert(!existsSync(join(target,'server')),'Server intermediates must not be public');
for (const path of ['archive','bibliography','node_modules','.git','.env']) assert(!existsSync(join(target,path)),'Nonpublic material staged: '+path);
let localLinks = 0;
for (const [,url] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  if (/^(?:https?:|data:|mailto:|#)/.test(url)) continue;
  assert(url.startsWith(basePath+'/'),'Asset escapes deployment path: '+url);
  const path = decodeURIComponent(url.slice(basePath.length+1).split(/[?#]/)[0]);
  assert(path && !path.split('/').includes('..'),'Invalid local asset path: '+url);
  assert(existsSync(join(target,path)),'Missing exported asset: '+url);
  localLinks++;
}
assert(localLinks>=3,'Expected CSS, scripts, favicon and manuscript links');
assert(html.includes(`href="${basePath}/paper/physical-agi.pdf"`),'Incorrect manuscript download path');
assert(html.includes(`href="${basePath}/favicon.svg"`),'Incorrect favicon path');
for (const [,id] of html.matchAll(/href="#([^"]+)"/g)) {
  assert(html.includes(`id="${id}"`),'Missing in-page navigation target: '+id);
}
console.log('Static assets staged from '+source+' to '+target);
console.log(`PASS: ${localLinks} local asset references and all in-page navigation targets under ${basePath || '/'}`);
