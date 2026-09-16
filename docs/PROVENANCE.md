# Sources, versions, and verification

Catalog snapshot: 2026-09-16. Historical citation and benchmark checks below retain their original dates.

This repository accompanies *From Language Priors towards Physical AI*, a working manuscript. It does not announce acceptance, an arXiv submission, new experiments, or an achieved Physical AGI system.

## Collection boundaries

- `data/papers.json` contains all 165 distinct records cited in Springer manuscript commit `4235a5c31682ac0d4a60c7894b3bcd66b32249ad`; this is a manuscript-derived index, not an exhaustive inventory of the field. The full source bibliographies contain 191 entries; the 26 uncited entries remain preserved but are not counted as cited works.
- Eight README categories provide an editorial taxonomy; the website retains its existing six-group reading guide. ThinkJEPA belongs to world modeling with frozen compact-VLM guidance, not the frozen-model zero-shot robot-controller category.
- Each of the 165 README rows links to an exact extracted BibTeX entry in `bibliography/entries/`; `bibliography/cited.bib` combines them. `data/catalog-manifest.json` pins the source commit, cited keys, and bibliography hashes.
- 20 entries are selected as a reading guide. Their primary pages were inspected for identity, title, and version. Selection is editorial, not a ranking or an endorsement.
- The full index retains source bibliography titles and years in `bibTitle` and `bibYear`. A featured display title or version is normalized to its linked primary record without editing the original bibliography.
- A linked source does not by itself mean the source or its scientific claims were checked. A Scholar query link is a discovery aid, not a paper URL and not proof of verification.

## Verification is not one boolean

The original 2026-09-08 audit covered 157 entries. Its recorded Scholar outcomes were:

- 80 linked title / visible-author / year matches.
- 10 linked title matches with metadata or version differences, some explained by publisher records.
- 1 citation-only result.
- 2 inspected queries without an exact matching source.
- 3 attempts blocked by a visible CAPTCHA.
- 61 entries not individually searched before checks stopped.

Thus 93 result pages were inspected, with 90 linked title matches. The other 64 entries have no inspected Scholar result. These records do not establish full-author-list accuracy or support for every manuscript claim. No CAPTCHA bypass was used.

The eight later Section 8 references add two recorded exact Scholar matches (VIA and embodied-agent navigation) and six queries without an exact matching source. The current totals are 82 matched, 10 matched with metadata review, one citation-only, eight no-exact-result, three blocked, and 61 unsearched. The [frontier-agent source audit](frontier-citation-audit.md) preserves the observations from the manuscript extension; this README update does not claim a fresh Scholar search of all 165 entries. GPT-Policy is labeled a research manuscript, not assigned an invented venue or arXiv identifier. Vendor documentation, project reports and resource collections are visibly labeled rather than presented as peer-reviewed papers.

## Resource links checked for this update

The GitHub, Hugging Face and homepage fields are a separate primary-source resource audit dated 2026-09-16. See [per-record evidence and limitations](RESOURCE-LINKS.md). Only paper-, author- or official-project-linked resources are included. Generic HF paper pages, unrelated same-name projects, empty GitHub buttons and unconfirmed third-party reproductions are excluded. A dash means not located or confirmed in this snapshot, not proof that no resource exists. An accessible page verifies neither the paper's scientific claims nor reproducibility of its code. Code links can contain evaluation scripts or prompts rather than full model weights; HF links can be datasets or feature caches rather than complete end-to-end checkpoints.

Original BibTeX and inherited Scholar metadata are unchanged. Resource audits can fill previously missing paper URLs but do not silently replace an existing cited version. Living repositories may describe later versions; notable differences are recorded in the resource evidence rather than rewriting the citation.

The optional `node scripts/check_resource_links.mjs` records current unauthenticated HTTP reachability in `data/resource-health.json`. It does not run in CI and does not substitute HTTP success for provenance. Check the timestamp and any exceptions before assuming continued availability.

At this update, all 165 records have paper/original-source entry points; 115 have GitHub resources, 51 have HF resources, and 107 have homepages. Of 291 distinct resource URLs in the final catalog, 289 returned HTTP 200. Two original OpenAI announcement pages returned HTTP 403 to automated access; their official identities are independently supported and the access limitation is recorded. A 404 project page and a 401 HF destination were excluded from the promoted resource fields. This does not imply all source papers, publisher paywalls or Scholar queries were rechecked for HTTP availability.

Local validation passed: generated README/audit consistency, exact 165-key manuscript coverage, exact per-entry BibTeX, unchanged inherited Scholar fields and source bibliography hashes, all 22 archived files, valid Markdown local links, website TypeScript checking, and production static build. The manuscript's vector roadmap is copied byte-for-byte to `docs/assets/framework.svg`; its hash is pinned in the catalog manifest. No website deployment is part of this update.

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
- `bibliography/frontier-agents.bib`: eight additive references, copied byte-for-byte from the source revision; SHA-256 `2490df01307a3c8852cea2cb430568e3a4e0692ae83c4267b0c5ece28ccc0d25`.
- The website PDF remains the historical 36-page snapshot, SHA-256 `a2ff5d72885875cd8453beea74d4c08be42c302e363c657bc1d17230428ec1a8`. The README links to the updated manuscript repositories/PDF. This change does not deploy or redesign the companion website.
- `bibliography/manuscript.bib` describes this working manuscript; its title and 13-author list are synchronized to the current manuscript. It is not one of the preserved third-party reference files.

The old ACL review template, placeholder authors, and upstream template-release instructions are not included in the deployed assets.

## Design references and reuse

Organization was informed by [LLMSurvey](https://github.com/RUCAIBox/LLMSurvey), [Awesome-LLM-Robotics](https://github.com/GT-RIPL/Awesome-LLM-Robotics), and the [General-Purpose Robots academic website](https://robotics-fm-survey.github.io/) with its [companion collection](https://github.com/JeffreyYH/Awesome-Generalist-Robots-via-Foundation-Models).

We adopt the general patterns of paper-linked taxonomy, clear resource fields, contribution instructions, and a scholarly title/authors/framework/reading/evidence/citation page. Website layout, text, and diagrams are independently implemented; no reference-project graphics, logos, screenshots, or templates are copied.

Third-party papers, code, and datasets remain subject to their own licenses. Original ACL/BibTeX copyright and LPPL notices remain intact. The website starter and its dependencies retain their own licenses. No blanket license is asserted over third-party content.
