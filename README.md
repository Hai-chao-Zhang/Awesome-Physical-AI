# *ACL Paper Styles

This directory contains the latest LaTeX and Word templates for *ACL
conferences.

## Instructions for authors

Paper submissions to *ACL conferences must use the official ACL style
templates.

The LaTeX style files are available

- as an [Overleaf template](https://www.overleaf.com/latex/templates/association-for-computational-linguistics-acl-conference/jvxskxpnznfj)
- in this repository, in the [`latex`](https://github.com/acl-org/acl-style-files/blob/master/latex) subdirectory
- as a [.zip file](https://github.com/acl-org/acl-style-files/archive/refs/heads/master.zip)

Please see [`latex/acl_latex.tex`](https://github.com/acl-org/acl-style-files/blob/master/latex/acl_latex.tex) for an example.

The Microsoft Word template is available in this repository at [`word/acl.docx`](https://github.com/acl-org/acl-style-files/blob/master/word/acl.docx).

Please follow the paper formatting guidelines general to *ACL
conferences:

- [Paper formatting guidelines](https://acl-org.github.io/ACLPUB/formatting.html)

Authors may not modify these style files or use templates designed for
other conferences.

## Instructions for publications chairs

To adapt the style files for your conference, please fork this repository and
make necessary changes. Minimally, you'll need to update the name of
the conference and rename the files.

If you make improvements to the templates that should be propagated to
future conferences, please submit a pull request. Thank you in
advance!

In older versions of the templates, authors were asked to fill in the
START submission ID so that it would be stamped at the top of each
page of the anonymized version. This is no longer needed, because it
is now possible to do this stamping automatically within
START. Currently, the way to do this is for the program chair to email
support@softconf.com and request it.

## Instructions for making changes to style files

- merge pull request in github, or push to github
- git pull from github to a local repository
- then, git push from your local repository to overleaf project 
    - Overleaf project is https://www.overleaf.com/project/5f64f1fb97c4c50001b60549
    - Overleaf git url is https://git.overleaf.com/5f64f1fb97c4c50001b60549
- then, click "Submit" and then "Sumbit as Template" in overleaf in order to ask overleaf to update the overleaf template from the overleaf project

## Cited Papers by Section

The following list is generated from active (non-commented) citations in the current LaTeX source, following the `\input{...}` order in `latex/acl_latex.tex`. Backup files such as `section/2_llm_copy.tex` are excluded. Each section is listed in its own local citation order, so a paper can appear in more than one section. The current main paper has `125` globally unique active citation keys.

### `section/1_intro.tex`

Local unique citation keys: `18`

| # | First local cite | Bib key | Paper |
|---:|---|---|---|
| 1 | [`section/1_intro.tex:3`](section/1_intro.tex#L3) | `openai2023gpt4` | [Gpt-4 technical report](https://arxiv.org/abs/2303.08774) |
| 2 | [`section/1_intro.tex:3`](section/1_intro.tex#L3) | `team2023gemini` | [Gemini: a family of highly capable multimodal models](https://arxiv.org/abs/2312.11805) |
| 3 | [`section/1_intro.tex:3`](section/1_intro.tex#L3) | `anthropic2024claude35sonnettool` | [Claude 3.5 Sonnet](https://www.anthropic.com/news/claude-3-5-sonnet) |
| 4 | [`section/1_intro.tex:3`](section/1_intro.tex#L3) | `brown2020language` | [Language models are few-shot learners](https://proceedings.neurips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html) |
| 5 | [`section/1_intro.tex:3`](section/1_intro.tex#L3) | `wei2022chain` | [Chain-of-thought prompting elicits reasoning in large language models](https://proceedings.neurips.cc/paper_files/paper/2022/hash/9d5609613524ecf4f15af0f7b31abca4-Abstract-Conference.html) |
| 6 | [`section/1_intro.tex:4`](section/1_intro.tex#L4) | `petroni2019language` | [Language Models as Knowledge Bases?](https://aclanthology.org/D19-1250/) |
| 7 | [`section/1_intro.tex:4`](section/1_intro.tex#L4) | `roberts2020knowledge` | [How Much Knowledge Can You Pack Into the Parameters of a Language Model?](https://aclanthology.org/2020.emnlp-main.437/) |
| 8 | [`section/1_intro.tex:4`](section/1_intro.tex#L4) | `kandpal2023longtail` | [Large Language Models Struggle to Learn Long-Tail Knowledge](https://proceedings.mlr.press/v202/kandpal23a.html) |
| 9 | [`section/1_intro.tex:4`](section/1_intro.tex#L4) | `chang2024factualpretraining` | [How Do Large Language Models Acquire Factual Knowledge During Pretraining?](https://arxiv.org/abs/2406.11813) |
| 10 | [`section/1_intro.tex:13`](section/1_intro.tex#L13) | `alayrac2022flamingo` | [Flamingo: a visual language model for few-shot learning](https://proceedings.neurips.cc/paper_files/paper/2022/hash/960a172bc7fbf0177ccccbb411a7d800-Abstract-Conference.html) |
| 11 | [`section/1_intro.tex:13`](section/1_intro.tex#L13) | `li2023blip` | [Blip-2: Bootstrapping language-image pre-training with frozen image encoders and large language models](https://scholar.google.com/scholar?q=Blip-2%3A%20Bootstrapping%20language-image%20pre-training%20with%20frozen%20image%20encoders%20and%20large%20language%20models) |
| 12 | [`section/1_intro.tex:13`](section/1_intro.tex#L13) | `liu2023llava` | [Visual instruction tuning](https://proceedings.neurips.cc/paper_files/paper/2023/hash/6dcf277ea32ce3288914faf369fe6de0-Abstract-Conference.html) |
| 13 | [`section/1_intro.tex:19`](section/1_intro.tex#L19) | `driess2023palm` | [PaLM-E: an embodied multimodal language model](https://proceedings.mlr.press/v202/driess23a.html) |
| 14 | [`section/1_intro.tex:19`](section/1_intro.tex#L19) | `zitkovich2023rt` | [Rt-2: Vision-language-action models transfer web knowledge to robotic control](https://robotics-transformer2.github.io/) |
| 15 | [`section/1_intro.tex:19`](section/1_intro.tex#L19) | `kim2024openvla` | [OpenVLA: An Open-Source Vision-Language-Action Model](https://arxiv.org/abs/2406.09246) |
| 16 | [`section/1_intro.tex:19`](section/1_intro.tex#L19) | `black2024pi0` | [pi0: A Vision-Language-Action Flow Model for General Robot Control](https://www.physicalintelligence.company/download/pi0.pdf) |
| 17 | [`section/1_intro.tex:25`](section/1_intro.tex#L25) | `ha2018world` | [World models](https://arxiv.org/abs/1803.10122) |
| 18 | [`section/1_intro.tex:25`](section/1_intro.tex#L25) | `lecun2022path` | [A Path Towards Autonomous Machine Intelligence Version 0.9. 2, 2022-06-27](https://openreview.net/forum?id=BZ5a1r-kVsf) |

### `section/2_llm.tex`

Local unique citation keys: `34`

| # | First local cite | Bib key | Paper |
|---:|---|---|---|
| 1 | [`section/2_llm.tex:4`](section/2_llm.tex#L4) | `petroni2019language` | [Language Models as Knowledge Bases?](https://aclanthology.org/D19-1250/) |
| 2 | [`section/2_llm.tex:4`](section/2_llm.tex#L4) | `roberts2020knowledge` | [How Much Knowledge Can You Pack Into the Parameters of a Language Model?](https://aclanthology.org/2020.emnlp-main.437/) |
| 3 | [`section/2_llm.tex:5`](section/2_llm.tex#L5) | `brown2020language` | [Language models are few-shot learners](https://proceedings.neurips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html) |
| 4 | [`section/2_llm.tex:5`](section/2_llm.tex#L5) | `wei2022chain` | [Chain-of-thought prompting elicits reasoning in large language models](https://proceedings.neurips.cc/paper_files/paper/2022/hash/9d5609613524ecf4f15af0f7b31abca4-Abstract-Conference.html) |
| 5 | [`section/2_llm.tex:9`](section/2_llm.tex#L9) | `arkin1990integrating` | [Integrating behavioral, perceptual, and world knowledge in reactive navigation](https://doi.org/10.1016/S0921-8890%2805%2980031-4) |
| 6 | [`section/2_llm.tex:9`](section/2_llm.tex#L9) | `hagoort2004integration` | [Integration of word meaning and world knowledge in language comprehension](https://doi.org/10.1126/science.1095455) |
| 7 | [`section/2_llm.tex:9`](section/2_llm.tex#L9) | `schwenk2022okvqa` | [A-okvqa: A benchmark for visual question answering using world knowledge](https://arxiv.org/abs/2206.01718) |
| 8 | [`section/2_llm.tex:10`](section/2_llm.tex#L10) | `chen2024spatialvlm` | [SpatialVLM: Endowing Vision-Language Models with Spatial Reasoning Capabilities](https://openaccess.thecvf.com/content/CVPR2024/html/Chen_SpatialVLM_Endowing_Vision-Language_Models_with_Spatial_Reasoning_Capabilities_CVPR_2024_paper.html) |
| 9 | [`section/2_llm.tex:10`](section/2_llm.tex#L10) | `yuan2024robopoint` | [RoboPoint: A Vision-Language Model for Spatial Affordance Prediction in Robotics](https://proceedings.mlr.press/v270/yuan25c.html) |
| 10 | [`section/2_llm.tex:10`](section/2_llm.tex#L10) | `song2025robospatial` | [Robospatial: Teaching spatial understanding to 2d and 3d vision-language models for robotics](https://openaccess.thecvf.com/content/CVPR2025/html/Song_RoboSpatial_Teaching_Spatial_Understanding_to_2D_and_3D_Vision-Language_Models_CVPR_2025_paper.html) |
| 11 | [`section/2_llm.tex:11`](section/2_llm.tex#L11) | `qian2024affordancellm` | [AffordanceLLM: Grounding Affordance from Vision Language Models](https://openaccess.thecvf.com/content/CVPR2024W/OpenSUN3D/html/Qian_AffordanceLLM_Grounding_Affordance_from_Vision_Language_Models_CVPRW_2024_paper.html) |
| 12 | [`section/2_llm.tex:11`](section/2_llm.tex#L11) | `huang2024manipvqa` | [ManipVQA: Injecting Robotic Affordance and Physically Grounded Information into Multi-Modal Large Language Models](https://arxiv.org/abs/2403.11289) |
| 13 | [`section/2_llm.tex:11`](section/2_llm.tex#L11) | `chu2025threedaffordancellm` | [3D-AffordanceLLM: Harnessing Large Language Models for Open-Vocabulary Affordance Detection in 3D Worlds](https://openreview.net/forum?id=GThTiuXgDC) |
| 14 | [`section/2_llm.tex:15`](section/2_llm.tex#L15) | `bommasani2021foundation` | [On the Opportunities and Risks of Foundation Models](https://arxiv.org/abs/2108.07258) |
| 15 | [`section/2_llm.tex:16`](section/2_llm.tex#L16) | `kandpal2023longtail` | [Large Language Models Struggle to Learn Long-Tail Knowledge](https://proceedings.mlr.press/v202/kandpal23a.html) |
| 16 | [`section/2_llm.tex:16`](section/2_llm.tex#L16) | `chang2024factualpretraining` | [How Do Large Language Models Acquire Factual Knowledge During Pretraining?](https://arxiv.org/abs/2406.11813) |
| 17 | [`section/2_llm.tex:17`](section/2_llm.tex#L17) | `yuan2024factbench` | [Towards a Holistic Evaluation of LLMs on Factual Knowledge Recall](https://arxiv.org/abs/2404.16164) |
| 18 | [`section/2_llm.tex:17`](section/2_llm.tex#L17) | `hu2024gptkb` | [Enabling LLM Knowledge Analysis via Extensive Materialization](https://aclanthology.org/2025.acl-long.791/) |
| 19 | [`section/2_llm.tex:18`](section/2_llm.tex#L18) | `song2023llmplanner` | [LLM-Planner: Few-Shot Grounded Planning for Embodied Agents with Large Language Models](https://openaccess.thecvf.com/content/ICCV2023/html/Song_LLM-Planner_Few-Shot_Grounded_Planning_for_Embodied_Agents_with_Large_Language_ICCV_2023_paper.html) |
| 20 | [`section/2_llm.tex:18`](section/2_llm.tex#L18) | `rana2023sayplan` | [SayPlan: Grounding Large Language Models using 3D Scene Graphs for Scalable Robot Task Planning](https://proceedings.mlr.press/v229/rana23a.html) |
| 21 | [`section/2_llm.tex:18`](section/2_llm.tex#L18) | `hua2024gensim2` | [GenSim2: Scaling Robot Data Generation with Multi-modal and Reasoning LLMs](https://proceedings.mlr.press/v270/hua25a.html) |
| 22 | [`section/2_llm.tex:23`](section/2_llm.tex#L23) | `ahn2022saycan` | [Do As I Can, Not As I Say: Grounding Language in Robotic Affordances](https://proceedings.mlr.press/v205/ichter23a.html) |
| 23 | [`section/2_llm.tex:23`](section/2_llm.tex#L23) | `huang2022innermonologue` | [Inner Monologue: Embodied Reasoning through Planning with Language Models](https://proceedings.mlr.press/v205/huang23c.html) |
| 24 | [`section/2_llm.tex:23`](section/2_llm.tex#L23) | `huang2022zeroshotplanners` | [Language Models as Zero-Shot Planners: Extracting Actionable Knowledge for Embodied Agents](https://proceedings.mlr.press/v162/huang22a.html) |
| 25 | [`section/2_llm.tex:24`](section/2_llm.tex#L24) | `liang2023codeaspolicies` | [Code as policies: Language model programs for embodied control](https://ieeexplore.ieee.org/document/10160591) |
| 26 | [`section/2_llm.tex:24`](section/2_llm.tex#L24) | `singh2023progprompt` | [ProgPrompt: Program Generation for Situated Robot Task Planning using Large Language Models](https://link.springer.com/article/10.1007/s10514-023-10135-3) |
| 27 | [`section/2_llm.tex:24`](section/2_llm.tex#L24) | `wang2023voyager` | [Voyager: An Open-Ended Embodied Agent with Large Language Models](https://arxiv.org/abs/2305.16291) |
| 28 | [`section/2_llm.tex:25`](section/2_llm.tex#L25) | `huang2023voxposer` | [VoxPoser: Composable 3D Value Maps for Robotic Manipulation with Language Models](https://proceedings.mlr.press/v229/huang23b.html) |
| 29 | [`section/2_llm.tex:34`](section/2_llm.tex#L34) | `qiu2025phybench` | [PHYBench: Holistic Evaluation of Physical Perception and Reasoning in Large Language Models](https://nips.cc/virtual/2025/poster/121552) |
| 30 | [`section/2_llm.tex:34`](section/2_llm.tex#L34) | `xu2025physense` | [PhySense: Principle-Based Physics Reasoning Benchmarking for Large Language Models](https://arxiv.org/abs/2505.24823) |
| 31 | [`section/2_llm.tex:36`](section/2_llm.tex#L36) | `kambhampati2024llmscantplan` | [LLMs Can't Plan, But Can Help Planning in LLM-Modulo Frameworks](https://proceedings.mlr.press/v235/kambhampati24a.html) |
| 32 | [`section/2_llm.tex:36`](section/2_llm.tex#L36) | `valmeekam2024planbench` | [LLMs Still Can't Plan; Can LRMs? A Preliminary Evaluation of OpenAI's o1 on PlanBench](https://arxiv.org/abs/2409.13373) |
| 33 | [`section/2_llm.tex:37`](section/2_llm.tex#L37) | `xiang2025seephys` | [SeePhys: Does Seeing Help Thinking? Benchmarking Vision-Based Physics Reasoning](https://papers.nips.cc/paper_files/paper/2025/hash/86a472735333e2a9195b9c04eb324dea-Abstract-Datasets_and_Benchmarks_Track.html) |
| 34 | [`section/2_llm.tex:37`](section/2_llm.tex#L37) | `zhang2025phystoolbench` | [PhysToolBench: Benchmarking Physical Tool Understanding for MLLMs](https://openreview.net/forum?id=jaYdn7RbRO) |

### `section/3_vlm.tex`

Local unique citation keys: `35`

| # | First local cite | Bib key | Paper |
|---:|---|---|---|
| 1 | [`section/3_vlm.tex:4`](section/3_vlm.tex#L4) | `radford2021learning` | [Learning transferable visual models from natural language supervision](https://scholar.google.com/scholar?q=Learning%20transferable%20visual%20models%20from%20natural%20language%20supervision) |
| 2 | [`section/3_vlm.tex:4`](section/3_vlm.tex#L4) | `jia2021align` | [Scaling up visual and vision-language representation learning with noisy text supervision](https://scholar.google.com/scholar?q=Scaling%20up%20visual%20and%20vision-language%20representation%20learning%20with%20noisy%20text%20supervision) |
| 3 | [`section/3_vlm.tex:4`](section/3_vlm.tex#L4) | `alayrac2022flamingo` | [Flamingo: a visual language model for few-shot learning](https://proceedings.neurips.cc/paper_files/paper/2022/hash/960a172bc7fbf0177ccccbb411a7d800-Abstract-Conference.html) |
| 4 | [`section/3_vlm.tex:4`](section/3_vlm.tex#L4) | `liu2023llava` | [Visual instruction tuning](https://proceedings.neurips.cc/paper_files/paper/2023/hash/6dcf277ea32ce3288914faf369fe6de0-Abstract-Conference.html) |
| 5 | [`section/3_vlm.tex:7`](section/3_vlm.tex#L7) | `lu2019vilbert` | [Vilbert: Pretraining task-agnostic visiolinguistic representations for vision-and-language tasks](https://scholar.google.com/scholar?q=Vilbert%3A%20Pretraining%20task-agnostic%20visiolinguistic%20representations%20for%20vision-and-language%20tasks) |
| 6 | [`section/3_vlm.tex:7`](section/3_vlm.tex#L7) | `tan2019lxmert` | [Lxmert: Learning cross-modality encoder representations from transformers](https://scholar.google.com/scholar?q=Lxmert%3A%20Learning%20cross-modality%20encoder%20representations%20from%20transformers) |
| 7 | [`section/3_vlm.tex:7`](section/3_vlm.tex#L7) | `team2026qwen3` | [Qwen3.5-Omni Technical Report](https://arxiv.org/abs/2604.15804) |
| 8 | [`section/3_vlm.tex:7`](section/3_vlm.tex#L7) | `li2023blip` | [Blip-2: Bootstrapping language-image pre-training with frozen image encoders and large language models](https://scholar.google.com/scholar?q=Blip-2%3A%20Bootstrapping%20language-image%20pre-training%20with%20frozen%20image%20encoders%20and%20large%20language%20models) |
| 9 | [`section/3_vlm.tex:7`](section/3_vlm.tex#L7) | `shen2026fine` | [Fine-Grained Preference Optimization Improves Spatial Reasoning in VLMs](https://arxiv.org/abs/2506.21656) |
| 10 | [`section/3_vlm.tex:7`](section/3_vlm.tex#L7) | `agarwal2025cosmos` | [Cosmos world foundation model platform for physical ai](https://arxiv.org/abs/2501.03575) |
| 11 | [`section/3_vlm.tex:7`](section/3_vlm.tex#L7) | `liu2025generative` | [Generative physical ai in vision: A survey](https://arxiv.org/abs/2501.10928) |
| 12 | [`section/3_vlm.tex:7`](section/3_vlm.tex#L7) | `shridhar2022cliport` | [Cliport: What and where pathways for robotic manipulation](https://scholar.google.com/scholar?q=Cliport%3A%20What%20and%20where%20pathways%20for%20robotic%20manipulation) |
| 13 | [`section/3_vlm.tex:7`](section/3_vlm.tex#L7) | `bear2021physion` | [Physion: Evaluating physical prediction from vision in humans and machines](https://arxiv.org/abs/2106.08261) |
| 14 | [`section/3_vlm.tex:10`](section/3_vlm.tex#L10) | `rasheed2024glammpixelgroundinglarge` | [GLaMM: Pixel Grounding Large Multimodal Model](https://arxiv.org/abs/2311.03356) |
| 15 | [`section/3_vlm.tex:10`](section/3_vlm.tex#L10) | `lai2024lisa` | [Lisa: Reasoning segmentation via large language model](https://scholar.google.com/scholar?q=Lisa%3A%20Reasoning%20segmentation%20via%20large%20language%20model) |
| 16 | [`section/3_vlm.tex:10`](section/3_vlm.tex#L10) | `xiao2024florence` | [Florence-2: Advancing a unified representation for a variety of vision tasks](https://scholar.google.com/scholar?q=Florence-2%3A%20Advancing%20a%20unified%20representation%20for%20a%20variety%20of%20vision%20tasks) |
| 17 | [`section/3_vlm.tex:10`](section/3_vlm.tex#L10) | `deitke2025molmo` | [Molmo and pixmo: Open weights and open data for state-of-the-art vision-language models](https://scholar.google.com/scholar?q=Molmo%20and%20pixmo%3A%20Open%20weights%20and%20open%20data%20for%20state-of-the-art%20vision-language%20models) |
| 18 | [`section/3_vlm.tex:10`](section/3_vlm.tex#L10) | `chen2024spatialvlm` | [SpatialVLM: Endowing Vision-Language Models with Spatial Reasoning Capabilities](https://openaccess.thecvf.com/content/CVPR2024/html/Chen_SpatialVLM_Endowing_Vision-Language_Models_with_Spatial_Reasoning_Capabilities_CVPR_2024_paper.html) |
| 19 | [`section/3_vlm.tex:10`](section/3_vlm.tex#L10) | `song2025robospatial` | [Robospatial: Teaching spatial understanding to 2d and 3d vision-language models for robotics](https://openaccess.thecvf.com/content/CVPR2025/html/Song_RoboSpatial_Teaching_Spatial_Understanding_to_2D_and_3D_Vision-Language_Models_CVPR_2025_paper.html) |
| 20 | [`section/3_vlm.tex:10`](section/3_vlm.tex#L10) | `pothiraj2025capture` | [Capture: Evaluating spatial reasoning in vision language models via occluded object counting](https://scholar.google.com/scholar?q=Capture%3A%20Evaluating%20spatial%20reasoning%20in%20vision%20language%20models%20via%20occluded%20object%20counting) |
| 21 | [`section/3_vlm.tex:12`](section/3_vlm.tex#L12) | `ren2024timechat` | [Timechat: A time-sensitive multimodal large language model for long video understanding](https://scholar.google.com/scholar?q=Timechat%3A%20A%20time-sensitive%20multimodal%20large%20language%20model%20for%20long%20video%20understanding) |
| 22 | [`section/3_vlm.tex:12`](section/3_vlm.tex#L12) | `guo2025vtg` | [Vtg-llm: Integrating timestamp knowledge into video llms for enhanced video temporal grounding](https://scholar.google.com/scholar?q=Vtg-llm%3A%20Integrating%20timestamp%20knowledge%20into%20video%20llms%20for%20enhanced%20video%20temporal%20grounding) |
| 23 | [`section/3_vlm.tex:12`](section/3_vlm.tex#L12) | `wang2024grounded` | [Grounded-videollm: Sharpening fine-grained temporal grounding in video large language models](https://arxiv.org/abs/2410.03290) |
| 24 | [`section/3_vlm.tex:12`](section/3_vlm.tex#L12) | `zeng2025timesuite` | [Timesuite: Improving mllms for long video understanding via grounded tuning](https://scholar.google.com/scholar?q=Timesuite%3A%20Improving%20mllms%20for%20long%20video%20understanding%20via%20grounded%20tuning) |
| 25 | [`section/3_vlm.tex:12`](section/3_vlm.tex#L12) | `munasinghe2025videoglamm` | [Videoglamm: A large multimodal model for pixel-level visual grounding in videos](https://scholar.google.com/scholar?q=Videoglamm%3A%20A%20large%20multimodal%20model%20for%20pixel-level%20visual%20grounding%20in%20videos) |
| 26 | [`section/3_vlm.tex:12`](section/3_vlm.tex#L12) | `fu2026video` | [Video-MME-v2: Towards the Next Stage in Benchmarks for Comprehensive Video Understanding](https://arxiv.org/abs/2604.05015) |
| 27 | [`section/3_vlm.tex:12`](section/3_vlm.tex#L12) | `chow2025physbench` | [Physbench: Benchmarking and enhancing vision-language models for physical world understanding](https://scholar.google.com/scholar?q=Physbench%3A%20Benchmarking%20and%20enhancing%20vision-language%20models%20for%20physical%20world%20understanding) |
| 28 | [`section/3_vlm.tex:14`](section/3_vlm.tex#L14) | `qian2024affordancellm` | [AffordanceLLM: Grounding Affordance from Vision Language Models](https://openaccess.thecvf.com/content/CVPR2024W/OpenSUN3D/html/Qian_AffordanceLLM_Grounding_Affordance_from_Vision_Language_Models_CVPRW_2024_paper.html) |
| 29 | [`section/3_vlm.tex:14`](section/3_vlm.tex#L14) | `liu2025pavlm` | [PAVLM: Advancing point cloud based affordance understanding via vision-language model](https://scholar.google.com/scholar?q=PAVLM%3A%20Advancing%20point%20cloud%20based%20affordance%20understanding%20via%20vision-language%20model) |
| 30 | [`section/3_vlm.tex:14`](section/3_vlm.tex#L14) | `liu2026palm` | [PALM: Progress-Aware Policy Learning via Affordance Reasoning for Long-Horizon Robotic Manipulation](https://arxiv.org/abs/2601.07060) |
| 31 | [`section/3_vlm.tex:14`](section/3_vlm.tex#L14) | `yuan2024robopoint` | [RoboPoint: A Vision-Language Model for Spatial Affordance Prediction in Robotics](https://proceedings.mlr.press/v270/yuan25c.html) |
| 32 | [`section/3_vlm.tex:18`](section/3_vlm.tex#L18) | `fu2024blink` | [Blink: Multimodal large language models can see but not perceive](https://scholar.google.com/scholar?q=Blink%3A%20Multimodal%20large%20language%20models%20can%20see%20but%20not%20perceive) |
| 33 | [`section/3_vlm.tex:18`](section/3_vlm.tex#L18) | `fu2025video` | [Video-mme: The first-ever comprehensive evaluation benchmark of multi-modal llms in video analysis](https://scholar.google.com/scholar?q=Video-mme%3A%20The%20first-ever%20comprehensive%20evaluation%20benchmark%20of%20multi-modal%20llms%20in%20video%20analysis) |
| 34 | [`section/3_vlm.tex:18`](section/3_vlm.tex#L18) | `puyin2025quantiphy` | [QuantiPhy: A Quantitative Benchmark Evaluating Physical Reasoning Abilities of Vision-Language Models](https://arxiv.org/abs/2512.19526) |
| 35 | [`section/3_vlm.tex:18`](section/3_vlm.tex#L18) | `wu2025mass` | [MASS: Motion-Aware Spatial-Temporal Grounding for Physics Reasoning and Comprehension in Vision-Language Models](https://arxiv.org/abs/2511.18373) |

### `section/4_action.tex`

Local unique citation keys: `20`

| # | First local cite | Bib key | Paper |
|---:|---|---|---|
| 1 | [`section/4_action.tex:11`](section/4_action.tex#L11) | `zitkovich2023rt` | [Rt-2: Vision-language-action models transfer web knowledge to robotic control](https://robotics-transformer2.github.io/) |
| 2 | [`section/4_action.tex:11`](section/4_action.tex#L11) | `kim2024openvla` | [OpenVLA: An Open-Source Vision-Language-Action Model](https://arxiv.org/abs/2406.09246) |
| 3 | [`section/4_action.tex:11`](section/4_action.tex#L11) | `pertsch2025fast` | [FAST: Efficient action tokenization for vision-language-action models](https://arxiv.org/abs/2501.09747) |
| 4 | [`section/4_action.tex:12`](section/4_action.tex#L12) | `act` | [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://arxiv.org/abs/2304.13705) |
| 5 | [`section/4_action.tex:12`](section/4_action.tex#L12) | `black2024pi0` | [pi0: A Vision-Language-Action Flow Model for General Robot Control](https://www.physicalintelligence.company/download/pi0.pdf) |
| 6 | [`section/4_action.tex:12`](section/4_action.tex#L12) | `physicalintelligence2025pi05` | [pi0.5: A Vision-Language-Action Model with Open-World Generalization](https://proceedings.mlr.press/v305/black25a.html) |
| 7 | [`section/4_action.tex:12`](section/4_action.tex#L12) | `wen2025dexvla` | [DexVLA: Vision-language model with plug-in diffusion expert for general robot control](https://arxiv.org/abs/2502.05855) |
| 8 | [`section/4_action.tex:12`](section/4_action.tex#L12) | `rdt1b2025` | [RDT-1B: a Diffusion Foundation Model for Bimanual Manipulation](https://scholar.google.com/scholar?q=RDT-1B%3A%20a%20Diffusion%20Foundation%20Model%20for%20Bimanual%20Manipulation) |
| 9 | [`section/4_action.tex:14`](section/4_action.tex#L14) | `qu2025spatialvla` | [SpatialVLA: Exploring Spatial Representations for Visual-Language-Action Model](https://scholar.google.com/scholar?q=SpatialVLA%3A%20Exploring%20Spatial%20Representations%20for%20Visual-Language-Action%20Model) |
| 10 | [`section/4_action.tex:15`](section/4_action.tex#L15) | `zhen2024threedvla` | [3D-VLA: a 3D vision-language-action generative world model](https://scholar.google.com/scholar?q=3D-VLA%3A%20a%203D%20vision-language-action%20generative%20world%20model) |
| 11 | [`section/4_action.tex:21`](section/4_action.tex#L21) | `driess2023palm` | [PaLM-E: an embodied multimodal language model](https://proceedings.mlr.press/v202/driess23a.html) |
| 12 | [`section/4_action.tex:26`](section/4_action.tex#L26) | `o2024open` | [Open X-Embodiment: Robotic Learning Datasets and RT-X Models](https://arxiv.org/abs/2310.08864) |
| 13 | [`section/4_action.tex:27`](section/4_action.tex#L27) | `octo_2023` | [Octo: An Open-Source Generalist Robot Policy](https://scholar.google.com/scholar?q=Octo%3A%20An%20Open-Source%20Generalist%20Robot%20Policy) |
| 14 | [`section/4_action.tex:37`](section/4_action.tex#L37) | `bjorck2025gr00tn1` | [GR00T N1: An Open Foundation Model for Generalist Humanoid Robots](https://arxiv.org/abs/2503.14734) |
| 15 | [`section/4_action.tex:38`](section/4_action.tex#L38) | `wen2024tinyvla` | [TinyVLA: Towards fast, data-efficient vision-language-action models for robotic manipulation](https://scholar.google.com/scholar?q=TinyVLA%3A%20Towards%20fast%2C%20data-efficient%20vision-language-action%20models%20for%20robotic%20manipulation) |
| 16 | [`section/4_action.tex:38`](section/4_action.tex#L38) | `shukor2025smolvla` | [SmolVLA: A vision-language-action model for affordable and efficient robotics](https://arxiv.org/abs/2506.01844) |
| 17 | [`section/4_action.tex:38`](section/4_action.tex#L38) | `cai2026xiaomi` | [Xiaomi-Robotics-0: An Open-Sourced Vision-Language-Action Model with Real-Time Execution](https://arxiv.org/abs/2602.12684) |
| 18 | [`section/4_action.tex:38`](section/4_action.tex#L38) | `ye2026starvla` | [StarVLA-alpha: Reducing Complexity in Vision Language Action Systems](https://arxiv.org/abs/2604.11757) |
| 19 | [`section/4_action.tex:40`](section/4_action.tex#L40) | `intelligence2025pi06vlalearnsexperience` | [pi0.6*: a VLA That Learns From Experience](https://arxiv.org/abs/2511.14759) |
| 20 | [`section/4_action.tex:40`](section/4_action.tex#L40) | `torne2026mem` | [MEM: Multi-Scale Embodied Memory for Vision Language Action Models](https://arxiv.org/abs/2603.03596) |

### `section/5_world_models.tex`

Local unique citation keys: `13`

| # | First local cite | Bib key | Paper |
|---:|---|---|---|
| 1 | [`section/5_world_models.tex:56`](section/5_world_models.tex#L56) | `ha2018world` | [World models](https://arxiv.org/abs/1803.10122) |
| 2 | [`section/5_world_models.tex:56`](section/5_world_models.tex#L56) | `hafner2019planet` | [Learning latent dynamics for planning from pixels](https://scholar.google.com/scholar?q=Learning%20latent%20dynamics%20for%20planning%20from%20pixels) |
| 3 | [`section/5_world_models.tex:56`](section/5_world_models.tex#L56) | `hafner2020dreamer` | [Dream to Control: Learning Behaviors by Latent Imagination](https://scholar.google.com/scholar?q=Dream%20to%20Control%3A%20Learning%20Behaviors%20by%20Latent%20Imagination) |
| 4 | [`section/5_world_models.tex:56`](section/5_world_models.tex#L56) | `hafner2023dreamerv3` | [Mastering diverse domains through world models](https://arxiv.org/abs/2301.04104) |
| 5 | [`section/5_world_models.tex:56`](section/5_world_models.tex#L56) | `schrittwieser2020mastering` | [Mastering atari, go, chess and shogi by planning with a learned model](https://scholar.google.com/scholar?q=Mastering%20atari%2C%20go%2C%20chess%20and%20shogi%20by%20planning%20with%20a%20learned%20model) |
| 6 | [`section/5_world_models.tex:60`](section/5_world_models.tex#L60) | `hu2023gaia` | [Gaia-1: A generative world model for autonomous driving](https://arxiv.org/abs/2309.17080) |
| 7 | [`section/5_world_models.tex:60`](section/5_world_models.tex#L60) | `yang2023unisim` | [Learning Interactive Real-World Simulators](https://scholar.google.com/scholar?q=Learning%20Interactive%20Real-World%20Simulators) |
| 8 | [`section/5_world_models.tex:60`](section/5_world_models.tex#L60) | `bruce2024genie` | [Genie: Generative interactive environments](https://scholar.google.com/scholar?q=Genie%3A%20Generative%20interactive%20environments) |
| 9 | [`section/5_world_models.tex:61`](section/5_world_models.tex#L61) | `agarwal2025cosmos` | [Cosmos world foundation model platform for physical ai](https://arxiv.org/abs/2501.03575) |
| 10 | [`section/5_world_models.tex:67`](section/5_world_models.tex#L67) | `lecun2022path` | [A Path Towards Autonomous Machine Intelligence Version 0.9. 2, 2022-06-27](https://openreview.net/forum?id=BZ5a1r-kVsf) |
| 11 | [`section/5_world_models.tex:67`](section/5_world_models.tex#L67) | `assran2023ijepa` | [Self-supervised learning from images with a joint-embedding predictive architecture](https://scholar.google.com/scholar?q=Self-supervised%20learning%20from%20images%20with%20a%20joint-embedding%20predictive%20architecture) |
| 12 | [`section/5_world_models.tex:67`](section/5_world_models.tex#L67) | `bardes2024vjepa` | [Revisiting Feature Prediction for Learning Visual Representations from Video](https://scholar.google.com/scholar?q=Revisiting%20Feature%20Prediction%20for%20Learning%20Visual%20Representations%20from%20Video) |
| 13 | [`section/5_world_models.tex:68`](section/5_world_models.tex#L68) | `assran2025vjepa2` | [V-jepa 2: Self-supervised video models enable understanding, prediction and planning](https://arxiv.org/abs/2506.09985) |

### `section/6_physic_ai.tex`

Local unique citation keys: `30`

| # | First local cite | Bib key | Paper |
|---:|---|---|---|
| 1 | [`section/6_physic_ai.tex:8`](section/6_physic_ai.tex#L8) | `guo2026agenticlab` | [AgenticLab: A Real-World Robot Agent Platform that Can See, Think, and Act](https://arxiv.org/abs/2602.01662) |
| 2 | [`section/6_physic_ai.tex:8`](section/6_physic_ai.tex#L8) | `team2025gemini1` | [Gemini robotics: Bringing ai into the physical world](https://arxiv.org/abs/2503.20020) |
| 3 | [`section/6_physic_ai.tex:8`](section/6_physic_ai.tex#L8) | `team2025gemini15` | [Gemini robotics 1.5: Pushing the frontier of generalist robots with advanced embodied reasoning, thinking, and motion transfer](https://arxiv.org/abs/2510.03342) |
| 4 | [`section/6_physic_ai.tex:8`](section/6_physic_ai.tex#L8) | `brohan2023rt` | [RT-1: Robotics Transformer for Real-World Control at Scale](https://scholar.google.com/scholar?q=RT-1%3A%20Robotics%20Transformer%20for%20Real-World%20Control%20at%20Scale) |
| 5 | [`section/6_physic_ai.tex:8`](section/6_physic_ai.tex#L8) | `o2024open` | [Open X-Embodiment: Robotic Learning Datasets and RT-X Models](https://arxiv.org/abs/2310.08864) |
| 6 | [`section/6_physic_ai.tex:12`](section/6_physic_ai.tex#L12) | `ahn2022saycan` | [Do As I Can, Not As I Say: Grounding Language in Robotic Affordances](https://proceedings.mlr.press/v205/ichter23a.html) |
| 7 | [`section/6_physic_ai.tex:12`](section/6_physic_ai.tex#L12) | `liu2024ok` | [OK-Robot: What Really Matters in Integrating Open-Knowledge Models for Robotics](https://arxiv.org/abs/2401.12202) |
| 8 | [`section/6_physic_ai.tex:17`](section/6_physic_ai.tex#L17) | `huang2025rekep` | [ReKep: Spatio-Temporal Reasoning of Relational Keypoint Constraints for Robotic Manipulation](https://scholar.google.com/scholar?q=ReKep%3A%20Spatio-Temporal%20Reasoning%20of%20Relational%20Keypoint%20Constraints%20for%20Robotic%20Manipulation) |
| 9 | [`section/6_physic_ai.tex:17`](section/6_physic_ai.tex#L17) | `huang2023voxposer` | [VoxPoser: Composable 3D Value Maps for Robotic Manipulation with Language Models](https://proceedings.mlr.press/v229/huang23b.html) |
| 10 | [`section/6_physic_ai.tex:17`](section/6_physic_ai.tex#L17) | `liang2023codeaspolicies` | [Code as policies: Language model programs for embodied control](https://ieeexplore.ieee.org/document/10160591) |
| 11 | [`section/6_physic_ai.tex:17`](section/6_physic_ai.tex#L17) | `shen2026tiptop` | [TiPToP: A Modular Open-Vocabulary Planning System for Robotic Manipulation](https://arxiv.org/abs/2603.09971) |
| 12 | [`section/6_physic_ai.tex:31`](section/6_physic_ai.tex#L31) | `zitkovich2023rt` | [Rt-2: Vision-language-action models transfer web knowledge to robotic control](https://robotics-transformer2.github.io/) |
| 13 | [`section/6_physic_ai.tex:31`](section/6_physic_ai.tex#L31) | `liu2023llm` | [Llm+ p: Empowering large language models with optimal planning proficiency](https://arxiv.org/abs/2304.11477) |
| 14 | [`section/6_physic_ai.tex:48`](section/6_physic_ai.tex#L48) | `huang2023grounded` | [Grounded decoding: Guiding text generation with grounded models for embodied agents](https://scholar.google.com/scholar?q=Grounded%20decoding%3A%20Guiding%20text%20generation%20with%20grounded%20models%20for%20embodied%20agents) |
| 15 | [`section/6_physic_ai.tex:48`](section/6_physic_ai.tex#L48) | `fang2026molmoact2` | [MolmoAct2: Action Reasoning Models for Real-world Deployment](https://arxiv.org/abs/2605.02881) |
| 16 | [`section/6_physic_ai.tex:54`](section/6_physic_ai.tex#L54) | `wu2023tidybot` | [Tidybot: Personalized robot assistance with large language models](https://scholar.google.com/scholar?q=Tidybot%3A%20Personalized%20robot%20assistance%20with%20large%20language%20models) |
| 17 | [`section/6_physic_ai.tex:54`](section/6_physic_ai.tex#L54) | `zhang2024dkprompt` | [Dkprompt: Domain knowledge prompting vision-language models for open-world planning](https://arxiv.org/abs/2406.17659) |
| 18 | [`section/6_physic_ai.tex:59`](section/6_physic_ai.tex#L59) | `srivastavabehavior` | [BEHAVIOR: Benchmark for Everyday Household Activities in Virtual, Interactive, and Ecological Environments](https://arxiv.org/abs/2108.03332) |
| 19 | [`section/6_physic_ai.tex:59`](section/6_physic_ai.tex#L59) | `li2023behavior` | [Behavior-1k: A benchmark for embodied ai with 1,000 everyday activities and realistic simulation](https://scholar.google.com/scholar?q=Behavior-1k%3A%20A%20benchmark%20for%20embodied%20ai%20with%201%2C000%20everyday%20activities%20and%20realistic%20simulation) |
| 20 | [`section/6_physic_ai.tex:59`](section/6_physic_ai.tex#L59) | `liigibson` | [iGibson 2.0: Object-Centric Simulation for Robot Learning of Everyday Household Tasks](https://arxiv.org/abs/2108.03272) |
| 21 | [`section/6_physic_ai.tex:59`](section/6_physic_ai.tex#L59) | `shen2021igibson` | [iGibson 1.0: A simulation environment for interactive tasks in large realistic scenes](https://scholar.google.com/scholar?q=iGibson%201.0%3A%20A%20simulation%20environment%20for%20interactive%20tasks%20in%20large%20realistic%20scenes) |
| 22 | [`section/6_physic_ai.tex:59`](section/6_physic_ai.tex#L59) | `li2024embodied` | [Embodied agent interface: Benchmarking llms for embodied decision making](https://scholar.google.com/scholar?q=Embodied%20agent%20interface%3A%20Benchmarking%20llms%20for%20embodied%20decision%20making) |
| 23 | [`section/6_physic_ai.tex:59`](section/6_physic_ai.tex#L59) | `yang2025embodiedbench` | [Embodiedbench: Comprehensive benchmarking multi-modal large language models for vision-driven embodied agents](https://arxiv.org/abs/2502.09560) |
| 24 | [`section/6_physic_ai.tex:63`](section/6_physic_ai.tex#L63) | `liu2023libero` | [Libero: Benchmarking knowledge transfer for lifelong robot learning](https://scholar.google.com/scholar?q=Libero%3A%20Benchmarking%20knowledge%20transfer%20for%20lifelong%20robot%20learning) |
| 25 | [`section/6_physic_ai.tex:63`](section/6_physic_ai.tex#L63) | `fei2025libero` | [Libero-plus: In-depth robustness analysis of vision-language-action models](https://arxiv.org/abs/2510.13626) |
| 26 | [`section/6_physic_ai.tex:63`](section/6_physic_ai.tex#L63) | `zhou2025libero` | [LIBERO-PRO: Towards Robust and Fair Evaluation of Vision-Language-Action Models Beyond Memorization](https://arxiv.org/abs/2510.03827) |
| 27 | [`section/6_physic_ai.tex:66`](section/6_physic_ai.tex#L66) | `zhu2020robosuite` | [robosuite: A modular simulation framework and benchmark for robot learning](https://arxiv.org/abs/2009.12293) |
| 28 | [`section/6_physic_ai.tex:66`](section/6_physic_ai.tex#L66) | `nasiriany2024robocasa` | [Robocasa: Large-scale simulation of everyday tasks for generalist robots](https://arxiv.org/abs/2406.02523) |
| 29 | [`section/6_physic_ai.tex:66`](section/6_physic_ai.tex#L66) | `nasiriany2026robocasa365` | [Robocasa365: A large-scale simulation framework for training and benchmarking generalist robots](https://arxiv.org/abs/2603.04356) |
| 30 | [`section/6_physic_ai.tex:66`](section/6_physic_ai.tex#L66) | `yang2026robolab` | [RoboLab: A High-Fidelity Simulation Benchmark for Analysis of Task Generalist Policies](https://arxiv.org/abs/2604.09860) |
