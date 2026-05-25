# Physical AI Survey

This repository contains the LaTeX source for a survey paper on Physical AI, with an emphasis on how LLMs, VLMs, action models, and world models contribute complementary forms of world knowledge, grounding, and prediction.

## Build

Compile the paper with:

```bash
latexmk -pdf -interaction=nonstopmode latex/acl_latex.tex
```

The main paper source is [`latex/acl_latex.tex`](latex/acl_latex.tex), with section files under [`section/`](section/).

## LLM Section References

The following papers are currently cited in `section/2_llm.tex`.

### World Knowledge and Parametric Knowledge

- Arkin, 1990. *Integrating Behavioral, Perceptual, and World Knowledge in Reactive Navigation.*
- Hagoort et al., 2004. *Integration of Word Meaning and World Knowledge in Language Comprehension.*
- Petroni et al., 2019. *Language Models as Knowledge Bases?*
- Roberts et al., 2020. *How Much Knowledge Can You Pack Into the Parameters of a Language Model?*
- Brown et al., 2020. *Language Models are Few-Shot Learners.*
- Bommasani et al., 2021. *On the Opportunities and Risks of Foundation Models.*
- Wei et al., 2022. *Chain-of-Thought Prompting Elicits Reasoning in Large Language Models.*
- Schwenk et al., 2022. *A-OKVQA: A Benchmark for Visual Question Answering Using World Knowledge.*
- Kandpal et al., 2023. *Large Language Models Struggle to Learn Long-Tail Knowledge.*
- Chang et al., 2024. *How Do Large Language Models Acquire Factual Knowledge During Pretraining?*
- Yuan et al., 2024. *Towards a Holistic Evaluation of LLMs on Factual Knowledge Recall.*
- Hu et al., 2024. *Enabling LLM Knowledge Analysis via Extensive Materialization.*

### Spatial and Affordance Grounding

- Chen et al., 2024. *SpatialVLM: Endowing Vision-Language Models with Spatial Reasoning Capabilities.*
- Qian et al., 2024. *AffordanceLLM: Grounding Affordance from Vision Language Models.*
- Huang et al., 2024. *ManipVQA: Injecting Robotic Affordance and Physically Grounded Information into Multi-Modal Large Language Models.*
- Yuan et al., 2024. *RoboPoint: A Vision-Language Model for Spatial Affordance Prediction for Robotics.*
- Chu et al., 2025. *3D-AffordanceLLM: Harnessing Large Language Models for Open-Vocabulary Affordance Detection in 3D Worlds.*
- Song et al., 2025. *RoboSpatial: Teaching Spatial Understanding to 2D and 3D Vision-Language Models for Robotics.*

### LLMs for Embodied Planning and Control

- Ahn et al., 2022. *Do As I Can, Not As I Say: Grounding Language in Robotic Affordances.*
- Huang et al., 2022. *Inner Monologue: Embodied Reasoning through Planning with Language Models.*
- Huang et al., 2022. *Language Models as Zero-Shot Planners: Extracting Actionable Knowledge for Embodied Agents.*
- Song et al., 2023. *LLM-Planner: Few-Shot Grounded Planning for Embodied Agents with Large Language Models.*
- Liang et al., 2023. *Code as Policies: Language Model Programs for Embodied Control.*
- Singh et al., 2023. *ProgPrompt: Generating Situated Robot Task Plans Using Large Language Models.*
- Wang et al., 2023. *Voyager: An Open-Ended Embodied Agent with Large Language Models.*
- Huang et al., 2023. *VoxPoser: Composable 3D Value Maps for Robotic Manipulation with Language Models.*
- Rana et al., 2023. *SayPlan: Grounding Large Language Models Using 3D Scene Graphs for Scalable Robot Task Planning.*
- Hua et al., 2024. *GenSim2: Scaling Robot Data Generation with Multi-modal and Reasoning LLMs.*

### Limits of Language-Only Physical Reasoning

- Kambhampati et al., 2024. *LLMs Can't Plan, But Can Help Planning in LLM-Modulo Frameworks.*
- Valmeekam et al., 2024. *LLMs Still Can't Plan; Can LRMs? A Preliminary Evaluation of OpenAI's o1 on PlanBench.*
- Qiu et al., 2025. *PHYBench: Holistic Evaluation of Physical Perception and Reasoning in Large Language Models.*
- Xu et al., 2025. *PhySense: Principle-Based Physics Reasoning Benchmarking for Large Language Models.*
- Xiang et al., 2025. *SeePhys: Does Seeing Help Thinking? Benchmarking Vision-Based Physics Reasoning.*
- Zhang et al., 2025. *PhysToolBench: Benchmarking Physical Tool Understanding for MLLMs.*

