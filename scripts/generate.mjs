import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const read = p => JSON.parse(readFileSync(resolve(root,p),'utf8'));
const papers = read('data/papers.json');
const project = read('data/project.json');
const escape = s => String(s).replaceAll('|','&#124;').replaceAll('[','\\[').replaceAll(']','\\]');
const link = p => p.url ? '['+escape(p.title)+']('+p.url+')' : escape(p.title)+' · [discovery query]('+p.discoveryUrl+')';
const labels = {
  matched:'Scholar visible metadata matched',
  matched_metadata_review:'Scholar title matched; version/metadata note',
  citation_only:'Scholar citation-only result',
  no_exact_result:'No exact matching Scholar source found',
  blocked_attempted:'Scholar check blocked',
  unsearched:'Scholar check pending',
};
const featured = project.groups.map(g => '### '+g.title+'\n\n'+g.description+'\n\n'+papers.filter(p=>p.featured&&p.group===g.id).map(p=>'- '+link(p)+' — '+p.version+'. '+p.summary).join('\n')).join('\n\n');
const readme = `# Awesome Physical AI

### From Language Priors towards Physical AGI

A paper-linked research collection on grounded physical competence, learning, and generalization.

[**Academic website**](${project.website}) · [**Working manuscript PDF**](website/public/paper/physical-agi.pdf) · [**Complete citation index**](docs/CATALOG.md) · [**Contribute**](CONTRIBUTING.md)

**Haichao Zhang · Mingfei Chen · Shwai He · Zhengtong Xu · Yifan Shen · Yiyang Huang · Jianglin Lu · Yijiang Li · Yuhai Wang · Ang Li · Yu She · Yun Fu**

Northeastern University · University of Washington · University of Maryland, College Park · Purdue University · University of Illinois Urbana-Champaign · University of California, San Diego

> A model may explain how to open a drawer yet fail when its handle, friction, or contents change. The transition towards Physical AGI asks what an agent can learn and reliably accomplish beyond its training conditions.

This companion collection follows the working manuscript **From Language Priors towards Physical AGI**. Physical AGI is an aspirational research objective—not a capability established by assembling components or obtaining a high benchmark score. The page does not imply publication, acceptance, or an arXiv submission.

The repository remains private, and the website is initially owner-only. A public release is a separate decision.

## Contents

- [Framework](#framework)
- [Selected reading](#selected-reading)
- [Benchmark coverage](#benchmark-coverage)
- [Open questions](#open-questions)
- [Citation and contribution](#citation-and-contribution)
- [Sources, versions, and maintenance](#sources-versions-and-maintenance)

## Framework

| Functional interface | Central question |
|---|---|
${project.groups.slice(0,5).map(g=>'| '+g.title+' | '+g.question+' |').join('\n')}

These interfaces may be shared, recurrent, or parallel. **Generality is an evidence axis**, assessed through unfamiliar tasks and environments, bounded adaptation, retention, and transfer across dynamics and bodies. Autonomy and safety are reported separately.

## Selected reading

${papers.filter(p=>p.featured).length} selected starting points, grouped by their role in the framework. Primary identities and linked versions were inspected; recorded Scholar title/visible-metadata matches are not full-author-list or claim verification. The [complete index](docs/CATALOG.md) contains ${papers.length} distinct cited entries with pending checks preserved.

${featured}

## Benchmark coverage

Resource counts from original papers—not model scores or a cross-benchmark leaderboard.

| Benchmark | Release | Count and unit | Coverage |
|---|---|---|---|
${project.benchmarks.map(b=>'| ['+b.name+']('+b.url+') | '+b.version+' | **'+b.quantity+'** '+b.unit+' | '+b.coverage+' |').join('\n')}

See [numerical source locations and caveats](docs/BENCHMARKS.md). Different units are not interchangeable: activity definitions, task definitions, and testing instances measure different things.

## Open questions

- Learn genuinely new tasks under explicit experience and compute budgets.
- Use active sensing to reduce action-relevant uncertainty.
- Transfer skills across bodies, dynamics, and control interfaces.
- Retain acquired competence while learning from new experience.
- Evaluate whether predictions improve decisions and recovery.
- Measure reliable autonomy with failure, intervention, and safety reporting.

## Citation and contribution

Use [the manuscript BibTeX](bibliography/manuscript.bib) as a working-manuscript citation. Cite each original paper when using its methods, data, or results.

Resource suggestions and corrections are welcome via issues and pull requests; follow [CONTRIBUTING.md](CONTRIBUTING.md). Include a primary link, the exact version, and what you actually checked.

## Sources, versions, and maintenance

- [Provenance and verification boundaries](docs/PROVENANCE.md)
- [Machine-readable records](data/papers.json) and [benchmark/project data](data/project.json)
- [Preserved manuscript bibliography](bibliography/custom.bib)
- [Website development](website/README.md)
- [Historical ACL draft and original 125-key index](archive/acl-draft/README.md)

The old ACL material is archived, not the active website or current manuscript. Its original bibliography and third-party license notices are retained. The original bibliography is not silently rewritten when display metadata is normalized.

Organization references: [LLMSurvey](https://github.com/RUCAIBox/LLMSurvey), [Awesome-LLM-Robotics](https://github.com/GT-RIPL/Awesome-LLM-Robotics), and [General-Purpose Robots](https://robotics-fm-survey.github.io/). Website implementation and framework diagram are original; no graphics or template code from these projects are copied.

Snapshot: **${project.checkedOn}**. This is a manuscript-derived collection, not a claim of exhaustive coverage. Third-party works remain subject to their own licenses.
`;
writeFileSync(resolve(root,'README.md'), readme);
const catalogue = `# Complete manuscript citation index

Snapshot: ${project.checkedOn}. **${papers.length} distinct cited entries**, derived from the revised manuscript, not an exhaustive field inventory. Group assignment is an editorial reading aid; records may have additional themes in [the data](../data/papers.json).

The original bibliography is preserved separately. Display versions for selected items follow the linked primary records; other entries retain their inherited bibliography year. A source link or Scholar discovery query is not verification. No model or product entry is an assertion of achieved Physical AGI. See [provenance and pending-check details](PROVENANCE.md).

${project.groups.map(g=>'## '+g.title+'\n\n| Key | Source | Version | Recorded checks |\n|---|---|---|---|\n'+papers.filter(p=>p.group===g.id).map(p=>'| `'+p.key+'` | '+link(p)+' | '+escape(p.version)+' | '+labels[p.scholarStatus]+(p.sourceChecked?'; primary identity checked':'')+(p.metadataNote?'; '+escape(p.metadataNote):'')+' |').join('\n')).join('\n\n')}
`;
writeFileSync(resolve(root,'docs/CATALOG.md'), catalogue);
const benchmarks = `# Benchmark coverage: source evidence

Checked on ${project.checkedOn}. All four references exist in the preserved manuscript bibliography. Primary numerical evidence and recorded Scholar visible-metadata matches were checked separately. These are published resource statistics, not newly executed experiments.

${project.benchmarks.map(b=>'## '+b.name+'\n\n- Release: '+b.version+'.\n- Count: **'+b.quantity+' '+b.unit+'**; **'+b.coverage+'**.\n- Definition: '+b.detail+'\n- Primary source: [original paper]('+b.url+').\n- Location: '+b.location+'.\n- Caveat: '+b.caveat+'\n- Existing citation key: `'+b.key+'`.').join('\n\n')}

Do not mix later releases or challenge subsets with these counts. Cross-model comparisons additionally require a shared split, observation/action interface, training exposure, adaptation budget, and evaluation protocol. More tasks alone do not establish generality.
`;
writeFileSync(resolve(root,'docs/BENCHMARKS.md'), benchmarks);
console.log('Generated README, catalogue ('+papers.length+' entries), and benchmark evidence.');
