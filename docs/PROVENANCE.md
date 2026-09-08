# Sources, versions, and verification

Snapshot: 2026-09-08.

This repository accompanies *From Language Priors towards Physical AGI*, a working manuscript. It does not announce acceptance, an arXiv submission, new experiments, or an achieved Physical AGI system.

## Collection boundaries

- `data/papers.json` contains 157 distinct entries cited in the revised manuscript; this is a manuscript-derived index, not an exhaustive inventory of the field.
- 20 entries are selected as a reading guide. Their primary pages were inspected for identity, title, and version. Selection is editorial, not a ranking or an endorsement.
- The full index retains source bibliography titles and years in `bibTitle` and `bibYear`. A featured display title or version is normalized to its linked primary record without editing the original bibliography.
- A linked source does not by itself mean the source or its scientific claims were checked. A Scholar query link is a discovery aid, not a paper URL and not proof of verification.

## Verification is not one boolean

Recorded Scholar outcomes from the manuscript audit:
- 80 linked title / visible-author / year matches.
- 10 linked title matches with metadata or version differences, some explained by publisher records.
- 1 citation-only result.
- 2 inspected queries without an exact matching source.
- 3 attempts blocked by a visible CAPTCHA.
- 61 entries not individually searched before checks stopped.

Thus 93 result pages were inspected, with 90 linked title matches. The other 64 entries have no inspected Scholar result. These records do not establish full-author-list accuracy or support for every manuscript claim. No CAPTCHA bypass was used.

`sourceChecked` records a separate primary-source identity check. Benchmark numerical evidence is documented separately in [BENCHMARKS.md](BENCHMARKS.md). The website never labels the entire bibliography as verified.

Version examples:
- OpenVLA and ReKep have 2024 preprints and 2025 PMLR publications; the selected links use the publication records.
- Octo is displayed as 2024 despite its inherited `octo_2023` key.
- Morris et al. first appeared in 2023; its current arXiv record was revised in 2025. The linked title follows that record.
- SpatialVLM author lists differ between inspected records. The site displays the title and version, not a purportedly fully verified author list.
- Frontier product documentation is not a peer-reviewed robotics result and does not demonstrate Physical AGI.
- The [GPT-6 Astra official model page](https://developers.openai.com/api/docs/models/gpt-6-astra) was re-opened on 2026-09-08. Its identity is checked as product documentation, while its recorded Scholar query found no matching articles. No publication date or robotics result is invented.
- Per-record `scholarNote` and `scholarEvidenceUrl` retain the concrete version observations; `metadataNote` carries explicit author/year discrepancies rather than referring to an unavailable UI report. This includes CaP-X's Letian Fu / Max Fu discrepancy and RoboLab's Jenai Xuning Yang / Xuning Yang discrepancy. Original bibliography entries remain unchanged.

## Preserved source material

The repository originally contained an ACL-formatted draft and template README at commit `cd1cb16428fa4504f81572886f526129281ffbeb`. Those 22 files are moved byte-for-byte to [archive/acl-draft](../archive/acl-draft/). This is historical material, not the current manuscript or the website source. Its old 125-key section index and all 164 bibliography entries are retained, including entries absent from the new draft.

The revised manuscript bibliography is copied without editing:
- `bibliography/custom.bib`: 180 entries; SHA-256 `d8e255a0c5f62553dd6e20b0b4ab9215067bec80e89a754d8f7b85b5ea936bad`.
- `bibliography/additions.bib`: three additional manuscript references.
- The website PDF is the revised 36-page working manuscript, SHA-256 `a2ff5d72885875cd8453beea74d4c08be42c302e363c657bc1d17230428ec1a8`.

The old ACL review template, placeholder authors, and upstream template-release instructions are not included in the deployed assets.

## Design references and reuse

Organization was informed by [LLMSurvey](https://github.com/RUCAIBox/LLMSurvey), [Awesome-LLM-Robotics](https://github.com/GT-RIPL/Awesome-LLM-Robotics), and the [General-Purpose Robots academic website](https://robotics-fm-survey.github.io/) with its [companion collection](https://github.com/JeffreyYH/Awesome-Generalist-Robots-via-Foundation-Models).

We adopt the general patterns of paper-linked taxonomy, clear resource fields, contribution instructions, and a scholarly title/authors/framework/reading/evidence/citation page. Website layout, text, and diagrams are independently implemented; no reference-project graphics, logos, screenshots, or templates are copied.

Third-party papers, code, and datasets remain subject to their own licenses. Original ACL/BibTeX copyright and LPPL notices remain intact. The website starter and its dependencies retain their own licenses. No blanket license is asserted over third-party content.
