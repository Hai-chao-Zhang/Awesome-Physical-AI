import {readFileSync, writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const read = p => JSON.parse(readFileSync(resolve(root, p), 'utf8'));
const papers = read('data/papers.json'), project = read('data/project.json');
const manifest = read('data/catalog-manifest.json');
const figure = read('docs/assets/figure1.json');
const esc = s => String(s).replaceAll('|', '&#124;').replaceAll('[', '\\[').replaceAll(']', '\\]');
const labels = {matched:'Scholar metadata matched', matched_metadata_review:'Scholar match with version/metadata note', citation_only:'Scholar citation-only result', no_exact_result:'No exact Scholar source found', blocked_attempted:'Scholar check blocked', unsearched:'Scholar check pending'};
const cats = project.catalogCategories;
const categoryPapers = id => papers.filter(p => p.category === id).sort((a,b) => (Number.parseInt(b.bibYear) || 0) - (Number.parseInt(a.bibYear) || 0) || a.title.localeCompare(b.title));
const paperLink = p => p.url ? `[${esc(p.title)}](${p.url})` : `${esc(p.title)} · [find source](${p.discoveryUrl})`;
const links = (urls, label) => urls?.length ? urls.map((url,i) => `[${label}${urls.length > 1 ? ' ' + (i+1) : ''}](${url})`).join(' · ') : '—';
const rows = id => categoryPapers(id).map(p => `| <a id="paper-${p.key}"></a>${paperLink(p)}<br/>${esc(p.version)}${p.kind !== 'Paper' ? ' · **'+p.kind+'**' : ''} | ${links(p.resources?.github, 'Repo')} | ${links(p.resources?.huggingface, 'HF')} | ${links(p.resources?.homepage, 'Project')} | [BibTeX](${p.citationFile}) · [Scholar](${p.discoveryUrl}) |`).join('\n');
const sourceStats = Object.fromEntries(['github','huggingface','homepage'].map(type => [type, papers.filter(p=>p.resources?.[type]?.length).length]));
const readme = `# Awesome Physical AI

## ${project.manuscriptTitle}

A survey companion on language priors, physical grounding, world models and embodied agents, with Physical AGI treated as a research objective rather than an established capability.

[**Manuscript PDF**](https://github.com/Hai-chao-Zhang/physicalAGI-Review/blob/main/output/pdf/paper.pdf) · [**Companion website**](${project.website}) · [**All BibTeX**](bibliography/cited.bib)

**${project.authors.join(' · ')}**

Northeastern University · University of Washington · University of Maryland, College Park · Purdue University · University of Illinois Urbana-Champaign · University of California, San Diego

**${papers.length} cited records · ${cats.length} categories · ${sourceStats.github} with GitHub resources · ${sourceStats.huggingface} with Hugging Face resources · ${sourceStats.homepage} with project pages**

This README lists every distinct reference used in the current manuscript, including clearly labeled reports and product documentation. The repository and linked manuscripts are working research materials; no arXiv identifier, acceptance or peer-review status is implied. The companion website is an earlier presentation snapshot; the manuscript links and catalog here are current.

## Updates

- **${figure.syncedOn}** — Synced the author-supplied Figure 1 used by both manuscript versions; the original PDF is preserved unchanged, with a high-resolution README preview.
- **${project.checkedOn}** — Complete categorized catalog, per-paper BibTeX, and primary-source resource links; added the Astra/Fable and GPT-Policy references from Section 8.
- **${project.checkedOn}** — Figure 1 and the text distinguish frozen compact-VLM-guided world modeling (ThinkJEPA) from frozen frontier-VLM robot-use agents.

## Contents

- [Research framework](#research-framework)
${cats.map((c,i) => `- [${i+1}. ${c.title}](#${c.id}) (${categoryPapers(c.id).length})`).join('\n')}
- [Benchmark coverage](#benchmark-coverage)
- [Citation](#citation)
- [Contributing and verification](#contributing-and-verification)

## Research framework

[![Figure 1: Roadmap from language priors towards Physical AI. The current author-supplied figure used in both manuscript versions.](${figure.preview})](${figure.pdf})

[Original Figure 1 PDF](${figure.pdf}) · [Full-resolution preview](${figure.preview})

The PDF is copied byte-for-byte from the manuscript; the PNG above is a display rendering only. No figure content, fonts, or layout were edited.

These routes share language/vision priors and may be combined. ThinkJEPA uses a frozen compact VLM to guide a learned latent predictor; this does not make it a zero-shot robot controller. Zero-shot agents can use within-episode feedback, while supplied demonstrations and cross-episode adaptation require separate reporting.

## Complete paper and resource list

Each entry has a category and exact manuscript BibTeX, plus a paper/source link or an explicitly labeled discovery query. **—** means that no primary-source-confirmed link was located in this snapshot, not that a resource does not exist. GitHub links may provide implementations, evaluation scripts, prompts or resource collections; they do not necessarily release model weights. HF links identify official or author-linked models, datasets or collections, not generic paper-index pages. Scholar links are search aids, not citation counts or verification claims. Resource types and version cautions are recorded in the [link evidence](docs/RESOURCE-LINKS.md); inherited metadata and unresolved citation checks remain visible in the [audit catalog](docs/CATALOG.md).

${cats.map((c,i) => `<a id="${c.id}"></a>\n\n### ${i+1}. ${c.title}\n\n${c.description}\n\n| Paper / source and version | GitHub | Hugging Face | Homepage | Citation |\n|---|---|---|---|---|\n${rows(c.id)}`).join('\n\n')}

## Benchmark coverage

Resource statistics from the cited original releases, audited on ${project.benchmarkCheckedOn}; these are not newly run experiments or a cross-benchmark model leaderboard.

| Benchmark | Release | Count and unit | Coverage |
|---|---|---|---|
${project.benchmarks.map(b=>`| [${b.name}](${b.url}) | ${b.version} | **${b.quantity}** ${b.unit} | ${b.coverage} |`).join('\n')}

See [source locations and counting caveats](docs/BENCHMARKS.md). Generality requires testing unfamiliar tasks and dynamics under declared adaptation budgets, not comparing incompatible task counts.

## Citation

If this collection helps your research, cite the working manuscript. Please also cite the original works whose methods, data or results you use. Every catalog row links to its preserved BibTeX entry; [download all ${papers.length} cited entries](bibliography/cited.bib).

\`\`\`bibtex
${readFileSync(resolve(root,'bibliography/manuscript.bib'),'utf8').trim()}
\`\`\`

## Contributing and verification

Suggestions and corrections are welcome through issues and pull requests. Include the paper identity, appropriate category, and a primary source confirming each code/model/data/project link; follow [CONTRIBUTING.md](CONTRIBUTING.md).

- [Machine-readable catalog](data/papers.json) and [source manifest](data/catalog-manifest.json)
- [Per-entry verification notes](docs/CATALOG.md), [resource-link evidence](docs/RESOURCE-LINKS.md), [HTTP availability snapshot](data/resource-health.json), and [provenance](docs/PROVENANCE.md)
- [Preserved bibliography](bibliography/custom.bib), [additions](bibliography/additions.bib), and [frontier sources](bibliography/frontier-agents.bib)
- [Historical ACL draft](archive/acl-draft/README.md) and [website development](website/README.md)

Organization follows the paper-linked taxonomy and resource-list conventions of [LLMSurvey](https://github.com/RUCAIBox/LLMSurvey) and [Awesome-LLM-Robotics](https://github.com/GT-RIPL/Awesome-LLM-Robotics). This is a manuscript-derived collection, not an exhaustive inventory of the field. Original bibliographies and third-party copyright/license notices are preserved; resource links do not imply endorsement.
`;
writeFileSync(resolve(root,'README.md'),readme);
const catalogue = `# Complete manuscript citation audit\n\nSnapshot: ${project.checkedOn}. ${papers.length} distinct cited records. Source: ${manifest.sourceRepository} at \`${manifest.sourceCommit}\`. Categories are editorial reading aids, not claims about benchmark comparability. Original title/year and Scholar records are preserved independently of resource-link checks.\n\n${cats.map(c=>`## ${c.title}\n\n| Key | Source | Version | Recorded checks |\n|---|---|---|---|\n${categoryPapers(c.id).map(p=>`| \`${p.key}\` | ${paperLink(p)} | ${esc(p.version)} | ${labels[p.scholarStatus]}${p.sourceChecked?'; primary identity checked':''}${p.metadataNote?'; '+esc(p.metadataNote):''} |`).join('\n')}`).join('\n\n')}\n`;
writeFileSync(resolve(root,'docs/CATALOG.md'),catalogue);
const benchmarks = `# Benchmark coverage: source evidence\n\nChecked on ${project.benchmarkCheckedOn}. All four references exist in the preserved manuscript bibliography. Primary numerical evidence and recorded Scholar visible-metadata matches were checked separately. These are published resource statistics, not newly executed experiments.\n\n${project.benchmarks.map(b=>'## '+b.name+'\n\n- Release: '+b.version+'.\n- Count: **'+b.quantity+' '+b.unit+'**; **'+b.coverage+'**.\n- Definition: '+b.detail+'\n- Primary source: [original paper]('+b.url+').\n- Location: '+b.location+'.\n- Caveat: '+b.caveat+'\n- Existing citation key: \`'+b.key+'\`.').join('\n\n')}\n\nDo not mix later releases or challenge subsets with these counts. Cross-model comparisons additionally require a shared split, observation/action interface, training exposure, adaptation budget, and evaluation protocol. More tasks alone do not establish generality.\n`;
writeFileSync(resolve(root,'docs/BENCHMARKS.md'),benchmarks);
const evidence = papers.filter(p=>p.resourceAudit);
writeFileSync(resolve(root,'docs/RESOURCE-LINKS.md'),`# Resource-link evidence\n\nSnapshot: ${project.checkedOn}. Resource identity checks are separate from inherited citation metadata and scientific-claim verification. A dash in README means not located/confirmed in this snapshot, not proof of absence. Third-party reimplementations, unrelated dependencies and generic Hugging Face paper pages are not silently labeled official resources.\n\n${evidence.map(p=>`## ${p.key}\n\n- Checked: ${p.resourceAudit.checkedOn}.\n- Evidence: ${p.resourceAudit.evidence.map((u,i)=>`[source ${i+1}](${u})`).join(', ')}.\n- Notes: ${p.resourceAudit.notes || 'Resources linked by the paper, authors, or project repository.'}\n`).join('\n')}`);
console.log(`Generated complete README and audits: ${papers.length} entries; ${cats.length} categories; resources ${JSON.stringify(sourceStats)}.`);
