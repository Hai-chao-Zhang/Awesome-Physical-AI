# Benchmark coverage: source evidence

Checked on 2026-09-08. All four references exist in the preserved manuscript bibliography. Primary numerical evidence and recorded Scholar visible-metadata matches were checked separately. These are published resource statistics, not newly executed experiments.

## LIBERO

- Release: 2023 · original release.
- Count: **130 task definitions**; **4 suites**.
- Definition: 10 spatial + 10 object + 10 goal + 100 combined-transfer tasks.
- Primary source: [original paper](https://proceedings.neurips.cc/paper_files/paper/2023/file/8c3c666820ea055a77726d66fc7d447f-Paper-Datasets_and_Benchmarks.pdf).
- Location: PDF pp. 1–2; §4.2, p. 5.
- Caveat: Original four-suite accounting; later subset conventions differ.
- Existing citation key: `liu2023libero`.

## BEHAVIOR-1K

- Release: 2023 proceedings · CoRL 2022.
- Count: **1,000 activity definitions**; **50 scenes**.
- Definition: Logical everyday-activity definitions grounded in realistic simulation.
- Primary source: [original paper](https://proceedings.mlr.press/v205/li23a/li23a.pdf).
- Location: PDF p. 1; Table 1, p. 3; §4, p. 4.
- Caveat: Definitions are not sampled episodes or experimentally solved activities.
- Existing citation key: `li2023behavior`.

## RoboCasa

- Release: 2024 · not RoboCasa365.
- Count: **100 designed tasks**; **120 kitchen scenes**.
- Definition: 25 atomic + 75 composite tasks; scenes combine floor plans and styles.
- Primary source: [original paper](https://robocasa.ai/assets/robocasa_rss24.pdf).
- Location: Fig. 1, p. 1; §III-B, p. 4; §IV-C, p. 5.
- Caveat: Original 2024 release, not the later RoboCasa365 leaderboard.
- Existing citation key: `nasiriany2024robocasa`.

## EmbodiedBench

- Release: 2025 · arXiv v3 / ICML.
- Count: **1,128 testing instances**; **4 environments**.
- Definition: 6 capability subsets across EB-ALFRED, EB-Habitat, EB-Navigation, and EB-Manipulation.
- Primary source: [original paper](https://arxiv.org/html/2502.09560v3).
- Location: Abstract; Table 1; §4.
- Caveat: Six refers to capability subsets, not environments; instances are not task families.
- Existing citation key: `yang2025embodiedbench`.

Do not mix later releases or challenge subsets with these counts. Cross-model comparisons additionally require a shared split, observation/action interface, training exposure, adaptation budget, and evaluation protocol. More tasks alone do not establish generality.
