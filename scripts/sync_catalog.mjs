// Import only manuscript-cited records; existing bibliography bytes stay intact.
// Usage: node scripts/sync_catalog.mjs /path/to/AI-Review-Physical-AI-Survey
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
import {parseBib, displayText, citedKeys} from './catalog-lib.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.resolve(process.argv[2] ?? '');
if (!process.argv[2]) throw new Error('Supply the manuscript checkout.');
const tex = fs.readFileSync(path.join(source, 'sn-article.tex'), 'utf8');
const keys = citedKeys(tex);
const old = new Map(JSON.parse(fs.readFileSync(path.join(root, 'data/papers.json'))).map(p => [p.key, p]));
const bibFiles = ['custom.bib', 'additions.bib', 'frontier-agents.bib'];
for (const file of bibFiles) {
  const bytes = fs.readFileSync(path.join(source, file));
  const dest = path.join(root, 'bibliography', file);
  if (fs.existsSync(dest) && !fs.readFileSync(dest).equals(bytes)) throw new Error(`${file} differs; do not overwrite bibliography`);
  if (!fs.existsSync(dest)) fs.copyFileSync(path.join(source, file), dest);
}
const entries = bibFiles.flatMap(file => parseBib(fs.readFileSync(path.join(root, 'bibliography', file), 'utf8'), file));
const byKey = new Map(entries.map(e => [e.key, e]));
if (byKey.size !== entries.length) throw new Error('Duplicate bibliography keys; resolve explicitly before syncing.');
const frontier = new Set(parseBib(fs.readFileSync(path.join(root, 'bibliography/frontier-agents.bib'), 'utf8')).map(e => e.key));
frontier.add('openai2026astra');
const overrides = {
  zhang2026thinkjepa: 'world-models', zhang2026vlm4vla: 'action', fang2026molmoact2: 'action',
  liu2026palm: 'action', wang2026finemola: 'grounding',
  gao2026vla: 'action', intelligence2026pi: 'action', gong2025anytask: 'action',
  huang2024manipvqa: 'grounding', chu2025threedaffordancellm: 'grounding',
  schwenk2022okvqa: 'grounding', team2023gemini: 'grounding',
  huang2022innermonologue: 'agency', huang2022zeroshotplanners: 'agency',
  singh2023progprompt: 'agency', song2023llmplanner: 'agency', wang2023voyager: 'agency',
  hua2024gensim2: 'action', zhang2025dense: 'grounding', zhang2025linkedout: 'grounding',
  openai2023gpt4: 'priors', anthropic2024claude35sonnettool: 'priors',
  geva2023dissecting: 'priors', tao2024context: 'priors', ruis2025procedural: 'priors',
  morris2023levels: 'perspectives', chollet2019measure: 'perspectives',
  dewi2025systematicphysicalai: 'perspectives', li2023physicalai: 'perspectives',
  liu2025generative: 'perspectives', lu2025representation: 'perspectives',
  valmeekam2024planbench: 'evaluation', qiu2025phybench: 'evaluation',
  xiang2025seephys: 'evaluation', xu2025physense: 'evaluation', yuan2024factbench: 'evaluation',
  zhang2025phystoolbench: 'evaluation', bear2021physion: 'evaluation', chow2025physbench: 'evaluation',
  fu2024blink: 'evaluation', fu2025video: 'evaluation', fu2026video: 'evaluation',
  pothiraj2025capture: 'evaluation', puyin2025quantiphy: 'evaluation',
};
const noPaper = new Set(['awesome2026astra','anthropic2026fable51','isola2026robotuse','robocurve2026astra','movingatoms2026evaluation','openai2026astra','anthropic2024claude35sonnettool']);
const papers = keys.map(key => {
  const e = byKey.get(key);
  if (!e) throw new Error(`Missing bibliography entry: ${key}`);
  const p = old.get(key) ?? {
    key, title: displayText(e.fields.title), bibTitle: displayText(e.fields.title),
    bibYear: displayText(e.fields.year), version: displayText(e.fields.year),
    group: 'agency', groups: ['agency'], url: e.fields.url || null,
    discoveryUrl: 'https://scholar.google.com/scholar?q=' + encodeURIComponent('"' + displayText(e.fields.title) + '"'),
    featured: false, summary: null, sourceChecked: true,
    scholarStatus: ['hu2026via','zhou2026embodiedagents'].includes(key) ? 'matched' : 'no_exact_result',
    metadataNote: 'Added from the manuscript frontier-agent source audit; see provenance.',
    scholarEvidenceUrl: ['hu2026via','zhou2026embodiedagents'].includes(key) ? e.fields.url : null,
    scholarNote: 'See the preserved frontier-agent citation audit; primary source and Scholar indexing are separate.',
  };
  // Keep the original site's six groups stable; README uses its own explicit taxonomy.
  p.category = frontier.has(key) ? 'frontier-agents' : overrides[key] ?? (p.group === 'generality' ? 'evaluation' : p.group);
  p.kind = noPaper.has(key) ? 'Documentation / report' : key === 'cheng2026gptpolicy' ? 'Research manuscript' : 'Paper';
  p.citationFile = `bibliography/entries/${key}.bib`;
  p.resources ??= {github: [], huggingface: [], homepage: []};
  return p;
});
fs.writeFileSync(path.join(root, 'data/papers.json'), JSON.stringify(papers, null, 2) + '\n');
fs.mkdirSync(path.join(root, 'bibliography/entries'), {recursive: true});
for (const key of keys) fs.writeFileSync(path.join(root, 'bibliography/entries', `${key}.bib`), byKey.get(key).raw + '\n');
fs.writeFileSync(path.join(root, 'bibliography/cited.bib'), keys.map(k => byKey.get(k).raw).join('\n\n') + '\n');
const manifest = {
  checkedOn: '2026-09-16', sourceRepository: 'Hai-chao-Zhang/AI-Review-Physical-AI-Survey',
  sourceCommit: execFileSync('git', ['rev-parse', 'HEAD'], {cwd: source, encoding: 'utf8'}).trim(),
  sourceTexSha256: crypto.createHash('sha256').update(tex).digest('hex'), citedKeys: keys,
  count: keys.length, bibliographyEntries: entries.length,
  bibliographyHashes: Object.fromEntries(bibFiles.map(f => [f, crypto.createHash('sha256').update(fs.readFileSync(path.join(source, f))).digest('hex')])),
};
const framework = fs.readFileSync(path.join(source, 'figures/roadmap-vector.svg'));
fs.mkdirSync(path.join(root, 'docs/assets'), {recursive: true});
fs.writeFileSync(path.join(root, 'docs/assets/framework.svg'), framework);
manifest.frameworkSvgSha256 = crypto.createHash('sha256').update(framework).digest('hex');
fs.writeFileSync(path.join(root, 'data/catalog-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Synchronized ${keys.length} cited records and exact per-entry BibTeX; ${entries.length - keys.length} uncited bibliography entries remain preserved but are not presented as cited works.`);
