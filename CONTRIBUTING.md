# Contributing

Contributions should help readers understand the path from language priors to grounded, transferable physical competence.

## Propose a resource

Open an issue or pull request with:
1. Exact title, authors, year, and the specific preprint or publication version.
2. A primary paper or official documentation URL; optionally an official code, dataset, or project link.
3. One or more relevant themes: language priors, grounding, action, world models, agency, or generality/evaluation.
4. A short factual explanation of relevance. Distinguish physical experiments, simulation, static evaluation, conceptual work, and product documentation.
5. What you actually checked. A generated Scholar query or an HTTP-success response is not metadata or claim verification.

Use the existing citation key when a record already exists. Do not silently change preserved BibTeX. Explain version corrections and retain the original fields. Do not claim that an architecture, a model size, or a benchmark score establishes Physical AGI.

## Change a benchmark number

Give the release, counting unit, original source, and page/table/section. Model comparisons require a common split, action and observation interfaces, training exposure, and evaluation budget. Do not merge task definitions, test instances, episodes, scenes, and activities into an unlabeled count.

## Maintain the collection

The shared source is `data/papers.json` and `data/project.json`. The main README and complete catalogue are generated from those records with `node scripts/generate.mjs`. Run `node scripts/check.mjs` and build the website before proposing a change. See [website/README.md](website/README.md).

The initial 157-entry snapshot is manuscript-derived. Broader community additions should be explicitly marked as collection additions rather than silently described as manuscript citations. Retain source and verification notes. Respect third-party licenses; submit original summaries rather than copied abstracts or figures.
