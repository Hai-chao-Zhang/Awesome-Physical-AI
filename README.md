# Awesome Physical AI

### From Language Priors towards Physical AGI

A paper-linked research collection on grounded physical competence, learning, and generalization.

[**Academic website**](https://physical-agi.bloomy-aphid-2494.chatgpt.site) · [**Working manuscript PDF**](website/public/paper/physical-agi.pdf) · [**Complete citation index**](docs/CATALOG.md) · [**Contribute**](CONTRIBUTING.md)

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
| Language priors | What knowledge does the agent bring? |
| Grounded state | What is happening here, now? |
| Action & skills | What can the agent actually do? |
| Predictive world models | What happens if the agent acts? |
| Integrated agency | How does the loop stay grounded? |

These interfaces may be shared, recurrent, or parallel. **Generality is an evidence axis**, assessed through unfamiliar tasks and environments, bounded adaptation, retention, and transfer across dynamics and bodies. Autonomy and safety are reported separately.

## Selected reading

20 selected starting points, grouped by their role in the framework. Primary identities and linked versions were inspected; recorded Scholar title/visible-metadata matches are not full-author-list or claim verification. The [complete index](docs/CATALOG.md) contains 157 distinct cited entries with pending checks preserved.

### Language priors

Semantic and procedural structure before physical interaction.

- [Language Models are Few-Shot Learners](https://proceedings.neurips.cc/paper_files/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html) — 2020 · NeurIPS. Demonstrates task adaptation through language context.
- [Large Language Models Struggle to Learn Long-Tail Knowledge](https://proceedings.mlr.press/v202/kandpal23a.html) — 2023 · ICML. Examines the limits of infrequently observed knowledge.
- [Language Models as Knowledge Bases?](https://aclanthology.org/D19-1250/) — 2019 · EMNLP-IJCNLP. Probes relational knowledge stored in pretrained language models.

### Grounded state

Objects, geometry, affordances, and changes that matter for action.

- [SpatialVLM: Endowing Vision-Language Models with Spatial Reasoning Capabilities](https://arxiv.org/abs/2401.12168) — 2024 · arXiv. Develops metric spatial reasoning beyond object recognition.
- [PaLM-E: An Embodied Multimodal Language Model](https://proceedings.mlr.press/v202/driess23a.html) — 2023 · ICML. Integrates continuous sensory observations with language-model reasoning.
- [Learning Transferable Visual Models From Natural Language Supervision](https://proceedings.mlr.press/v139/radford21a.html) — 2021 · ICML. Connects visual representations to natural-language supervision.

### Action & skills

Interfaces that turn intentions into executable behavior.

- [OpenVLA: An Open-Source Vision-Language-Action Model](https://proceedings.mlr.press/v270/kim25c.html) — 2025 · PMLR; preprint 2024. Adapts pretrained vision-language representations to robot control.
- [Octo: An Open-Source Generalist Robot Policy](https://arxiv.org/abs/2405.12213) — 2024 · arXiv. Studies policy transfer across robot sensors and action spaces.
- [π₀.₅: a Vision-Language-Action Model with Open-World Generalization](https://arxiv.org/abs/2504.16054) — 2025 · arXiv. Studies long-horizon manipulation in previously unseen homes.

### Predictive world models

Consequences, uncertainty, and predictions useful for decisions.

- [Cosmos World Foundation Model Platform for Physical AI](https://arxiv.org/abs/2501.03575) — 2025 · arXiv. Develops a foundation-model platform for physical-world simulation.
- [V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning](https://arxiv.org/abs/2506.09985) — 2025 · arXiv. Connects predictive video representations with physical planning.
- [Genie: Generative Interactive Environments](https://proceedings.mlr.press/v235/bruce24a.html) — 2024 · ICML. Learns action-controllable environments from unlabeled videos.

### Integrated agency

Planning, execution, feedback, and recovery within one system.

- [ReKep: Spatio-Temporal Reasoning of Relational Keypoint Constraints for Robotic Manipulation](https://proceedings.mlr.press/v270/huang25g.html) — 2025 · PMLR; preprint 2024. Connects language instructions to visual constraints and reactive actions.
- [LLMs Can't Plan, But Can Help Planning in LLM-Modulo Frameworks](https://arxiv.org/abs/2402.01817) — 2024 · arXiv / ICML position paper. Couples language-model proposals with external planning verifiers.
- [SayPlan: Grounding Large Language Models using 3D Scene Graphs for Scalable Robot Task Planning](https://proceedings.mlr.press/v229/rana23a.html) — 2023 · CoRL. Grounds plans in scene graphs and simulator feedback.

### Generality & evaluation

Novelty, bounded adaptation, retention, and embodiment transfer.

- [On the Measure of Intelligence](https://arxiv.org/abs/1911.01547) — 2019 · arXiv. Separates acquired task skill from efficient generalization.
- [BEHAVIOR-1K: A Benchmark for Embodied AI with 1,000 Everyday Activities and Realistic Simulation](https://proceedings.mlr.press/v205/li23a.html) — 2023 proceedings; CoRL 2022. Grounds evaluation in diverse everyday activity definitions.
- [LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning](https://proceedings.neurips.cc/paper_files/paper/2023/hash/8c3c666820ea055a77726d66fc7d447f-Abstract-Datasets_and_Benchmarks.html) — 2023 · NeurIPS Datasets and Benchmarks. Evaluates robotic knowledge transfer across sequential tasks.
- [Levels of AGI for Operationalizing Progress on the Path to AGI](https://arxiv.org/abs/2311.02462) — 2023 preprint; revised 2025. Distinguishes performance, generality, and autonomy.
- [EmbodiedBench: Comprehensive Benchmarking Multi-modal Large Language Models for Vision-Driven Embodied Agents](https://proceedings.mlr.press/v267/yang25f.html) — 2025 · ICML. Probes the gap between visual reasoning and embodied execution.

## Benchmark coverage

Resource counts from original papers—not model scores or a cross-benchmark leaderboard.

| Benchmark | Release | Count and unit | Coverage |
|---|---|---|---|
| [LIBERO](https://proceedings.neurips.cc/paper_files/paper/2023/file/8c3c666820ea055a77726d66fc7d447f-Paper-Datasets_and_Benchmarks.pdf) | 2023 · original release | **130** task definitions | 4 suites |
| [BEHAVIOR-1K](https://proceedings.mlr.press/v205/li23a/li23a.pdf) | 2023 proceedings · CoRL 2022 | **1,000** activity definitions | 50 scenes |
| [RoboCasa](https://robocasa.ai/assets/robocasa_rss24.pdf) | 2024 · not RoboCasa365 | **100** designed tasks | 120 kitchen scenes |
| [EmbodiedBench](https://arxiv.org/html/2502.09560v3) | 2025 · arXiv v3 / ICML | **1,128** testing instances | 4 environments |

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

Snapshot: **2026-09-08**. This is a manuscript-derived collection, not a claim of exhaustive coverage. Third-party works remain subject to their own licenses.
