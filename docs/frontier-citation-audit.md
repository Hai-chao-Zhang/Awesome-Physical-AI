# Corpus and citation audit

Initial checks: 2026-09-15; GPT-Policy update: 2026-09-16. Eight additive bibliography entries are isolated in `frontier-agents.bib`. `custom.bib` and `additions.bib` are byte-preserved. The pre-existing Astra documentation citation is reused, not rewritten.

| Key | Primary source / version | Type and use | Google Scholar result |
|---|---|---|---|
| `hu2026via` | [VIA](https://arxiv.org/abs/2607.11119v1), Hu, Sundaresan, Gao, Sadigh; 2026-07-13 | Preprint; visual-interface manipulation in simulation; Table 2 and §4.1 | Exact title matched; four authors, year and arXiv identifier checked in visible UI |
| `zhou2026embodiedagents` | [Embodied Agents Take Control](https://arxiv.org/abs/2607.26148v2), Zhou et al.; v2 2026-08-03 | Preprint; navigation; Table 5 p.8 and Table 13 p.23 | Exact title matched; seven authors, year and arXiv identifier checked in visible UI |
| `robocurve2026astra` | [GPT-6 Astra on robotic manipulation](https://openai.robocurve.org/gpt-6-astra/), 2026-09-04 | Web experimental report; Results, Technical specifications, Limitations | Exact title: no matching article; not presented as a Scholar-indexed paper |
| `anthropic2026fable51` | [Claude Fable 5.1](https://platform.claude.com/docs/en/models/fable-5-1/overview), accessed 2026-09-15 | Undated product documentation; identity and modalities only | Short title returns related papers; domain-restricted query finds no official documentation entry |
| `isola2026robotuse` | [Robot-Use Agents](https://web.mit.edu/phillipi/www/writing/robot-use-agents.html), Phillip Isola; 2026-09-07 | Author perspective; architecture framing, not quantitative evidence | Exact title: no matching article |
| `movingatoms2026evaluation` | [Evaluation](https://www.movingatoms.ai/platform/evaluation/), accessed 2026-09-15 | Platform documentation / recorded simulation trial; not a benchmark ranking | Exact page-title queries: no matching article |
| `awesome2026astra` | [Awesome-Astra-Embodied-AI](https://github.com/zjwzcx/Awesome-Astra-Embodied-AI/tree/61baafd5fc94ae2db32da8da57704310033a6210) | User-provided discovery index; pinned commit, not experiment | Exact title: no matching article |
| Existing `openai2026astra` | [GPT-6 Astra Model](https://developers.openai.com/api/docs/models/gpt-6-astra) | Official documentation re-read; original BibTeX retained, including original access date | Existing previously supplied reference; not a new Scholar verification claim |
| `cheng2026gptpolicy` | [In-Context Robot Learning with VLM Agents](https://cheng-haha.github.io/GPT-Policy/), Cheng et al.; public release 2026-09-16 | Research manuscript/project page; context-mediated real-robot adaptation, three trials per condition | September 16 exact-title query: no matching article. Authors/year checked against current project page and repository, not Scholar |

Scholar was checked through ordinary visible Chrome UI without CAPTCHA bypass. A matching entry confirms discoverability and bibliographic identity, not peer review or correctness. No result does not establish nonexistence. The saved `scholar-evidence/` files contain query URLs and visible-result extracts for the navigation paper and webpage checks; VIA's check was independently reported by the literature reviewer and matched against the arXiv author list. No screenshot is claimed where only a text snapshot was saved.

## Numerical traceability

- VIA: Table 2 reports a rounded 88% average across six tasks, ten seeds each. It is not the full LIBERO benchmark. All tasks are simulated.
- Navigation: Table 5, `Claude SDK fable-5`, primitive/default: 68.3 ± 1.5%; primitive/max: 78%; hybrid/default: 76.7 ± 0.6%. Default entries repeat the same 100 episodes three times; max has one run. Dispersion is across-run SD, not a confidence interval. The hybrid changes perception and geometric assistance as well as actions. Do not confuse Opus's 70.7 ± 3.5% abstract result with Fable.
- Robocurve: all six task/model counts come from Results. Bowl: Astra 19/20, Fable 5.1 8/20, Fable 5 1/20; insertion: 2/20, 2/20, 0/20. Preserve rig and grading caveats beside the numbers.
- Moving Atoms: the `/platform/evaluation/` page documents a named Astra trial. The separate `/solutions/model-evaluation/` page contains a different sample trace; its 282-step example is not substituted for the platform trace. No reliability percentage is calculated from either.

## Inclusion policy

These sources support a focused critical section, not an exhaustive or preregistered systematic review. No claim of peer review is made for arXiv preprints or web reports. Original numerical results are attributed; this project ran no robot experiments. Cost figures, broad SOTA assertions, and social-media-only adaptation claims are excluded from the manuscript table.

## GPT-Policy follow-up, September 16

The user requested a citation in Section 8. Current public metadata supersedes the anonymous preview and limited-code status recorded on September 15. The named-author release is cited as `cheng2026gptpolicy`; no journal, conference acceptance, or arXiv ID is supplied by inference.

Visible Chrome Google Scholar checks at 07:26 UTC:

- [Exact full title](https://scholar.google.com/scholar?q=%22In-Context+Robot+Learning+with+VLM+Agents%22): “did not match any articles”.
- [GPT-Policy](https://scholar.google.com/scholar?q=%22GPT-Policy%22): about 73 results; first ten were unrelated or general GPT-policy mentions. Remaining pages were not reviewed.

No CAPTCHA or access block occurred. This is a primary-source-verified citation, not a Scholar-matched paper. The older `scholar-evidence/` JSON is a dated September 15 record and is not relabeled as today's check.
