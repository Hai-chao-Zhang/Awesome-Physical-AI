import papers from '../../data/papers.json';
import project from '../../data/project.json';
import { basePath } from '@/lib/site';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
const repo = project.repo;
const stages = [
  ['Language priors', 'Knowledge and plans before interaction.'],
  ['Grounded state', 'Objects, space, and changes relevant to action.'],
  ['Action interfaces', 'Translate intent into feasible behavior.'],
  ['World models', 'Anticipate consequences and update beliefs.'],
  ['Integrated agency', 'Act, observe, recover, and retain experience.'],
];
const authors = [
  ['Haichao Zhang','1'],['Mingfei Chen','2'],['Shwai He','3'],['Zhengtong Xu','4'],
  ['Yifan Shen','5'],['Yiyang Huang','1'],['Jianglin Lu','1'],['Yijiang Li','6'],
  ['Yuhai Wang','1'],['Ang Li','3'],['Yu She','4'],['Yun Fu','1'],
];
const affiliations = ['Northeastern University','University of Washington','University of Maryland, College Park','Purdue University','University of Illinois Urbana-Champaign','University of California, San Diego'];
const questions = [
  ['Learning from limited experience','How can an agent acquire a genuinely new task under an explicit demonstration and interaction budget?'],
  ['Grounding through active sensing','When should the agent act to reduce uncertainty, rather than merely act on its current interpretation?'],
  ['Transfer across bodies and dynamics','Which skills survive changes in embodiment, contact, friction, and control interfaces?'],
  ['Memory without forgetting','Can new experience improve future decisions while preserving previously acquired competence?'],
  ['Prediction that changes decisions','Do world models improve feasible actions and recovery, beyond producing plausible future observations?'],
  ['Reliable autonomy','How should intervention, failure detection, recovery, and safety be reported alongside task completion?'],
];
const bibtex = `@unpublished{zhang2026physicalagi,
  title = {From Language Priors towards Physical AGI},
  author = {Zhang, Haichao and Chen, Mingfei and He, Shwai
    and Xu, Zhengtong and Shen, Yifan and Huang, Yiyang
    and Lu, Jianglin and Li, Yijiang and Wang, Yuhai
    and Li, Ang and She, Yu and Fu, Yun},
  year = {2026},
  note = {Working manuscript},
  url = {https://github.com/Hai-chao-Zhang/Awesome-Physical-AI}
}`;
function Heading({number,title,children}:{number:string;title:string;children:React.ReactNode}) {
  return <div className="section-head"><span className="section-no">{number}</span><div><h2>{title}</h2><p>{children}</p></div></div>;
}
export default function Home() {
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="topbar"><div className="wrap"><a className="brand" href="#main">Physical <span>AGI</span></a><nav aria-label="Main navigation"><a href="#overview">Overview</a><a href="#framework">Framework</a><a href="#papers">Reading</a><a href="#benchmarks">Benchmarks</a><a href="#cite">Cite</a><a href={repo}>GitHub ↗</a></nav></div></header>
    <main id="main" className="wrap">
      <section className="hero">
        <p className="eyebrow">Research framework · Curated resources</p>
        <h1>From Language Priors<br/>towards <em>Physical AGI</em></h1>
        <p className="lead">What must change when an agent moves from describing the physical world to learning how to act within it?</p>
        <div className="authors">{authors.map(([name,aff])=><span key={name}>{name}<sup>{aff}</sup></span>)}</div>
        <div className="affiliations">{affiliations.map((name,i)=><span key={name}><sup>{i+1}</sup> {name}</span>)}</div>
        <div className="actions"><a className="button primary" href={`${basePath}/paper/physical-agi.pdf`}>Read the manuscript <span aria-hidden="true">↗</span></a><a className="button" href={repo}>GitHub collection <span aria-hidden="true">↗</span></a><a className="button" href="#cite">BibTeX</a></div>
        <p className="hero-note">Working manuscript · Resource snapshot: September 8, 2026</p>
      </section>
      <section className="section" id="overview">
        <Heading number="01" title="The gap between knowing and doing">A language model may explain how to open a drawer. A physical agent must discover what works for this drawer.</Heading>
        <div className="overview-grid"><div className="prose"><p>A changed handle, unfamiliar friction, or an unexpected obstruction can defeat an otherwise plausible plan. Language priors offer a useful starting point, but physical competence also requires action-relevant perception, feedback, and learning from the difference between expected and observed outcomes.</p><p>This framework connects those functions and asks what would make their competence generalizable. The test is not how many components an architecture contains, but what an agent can learn and reliably accomplish beyond its training conditions.</p></div><aside className="definition"><p className="eyebrow">A stronger question</p><h3>Physical AI → Physical AGI</h3><p>From perceiving, predicting, reasoning about, or acting in physical environments to transferable competence across unfamiliar tasks, environments, dynamics, and bodies.</p><p className="qualification">Physical AGI is an aspirational research objective here—not a capability claimed for an existing system.</p></aside></div>
      </section>
      <section className="section" id="framework">
        <Heading number="02" title="Five interfaces. One grounded loop.">These functions may share a model, recur, or operate in parallel. They are not a compulsory sequence of separate architectures.</Heading>
        <figure><div className="roadmap">{stages.map(([title,detail],i)=><div className="stage" key={title}><span className="step">0{i+1}</span><h3>{title}</h3><p>{detail}</p></div>)}</div><div className="feedback-line"><span aria-hidden="true">↶</span> Experience, memory, and feedback connect all five interfaces <span aria-hidden="true">↷</span></div><div className="evidence-band"><strong>Evidence of generality</strong><span>Novel tasks and environments · Bounded adaptation · Retention · Transfer across dynamics and bodies</span></div><figcaption className="caption">Architectural coverage does not establish general intelligence. Autonomy and safety require separate evaluation.</figcaption></figure>
      </section>
      <section className="section" id="papers">
        <Heading number="03" title="A guided reading collection">{papers.filter(p=>p.featured).length} starting points across six connected themes. The complete manuscript index contains {papers.length} distinct cited entries.</Heading>
        <div className="reading-layout"><nav className="reading-nav" aria-label="Reading themes">{project.groups.map((g,i)=><a href={'#reading-'+g.id} key={g.id}><span>0{i+1}</span>{g.title}</a>)}<a className="catalog-link" href={repo+'/blob/main/docs/CATALOG.md'}>Full citation index ↗</a></nav><div className="reading-groups">{project.groups.map(g=><section className="reading-group" id={'reading-'+g.id} key={g.id}><p className="group-label">{g.title}</p><h3>{g.question}</h3><ul className="paper-list">{papers.filter(p=>p.featured&&p.group===g.id).map(p=><li key={p.key}><div className="paper-meta">{p.version}</div><a className="paper-title" href={p.url!}>{p.title}<span aria-hidden="true"> ↗</span></a><p>{p.summary}</p></li>)}</ul></section>)}</div></div>
        <p className="source-note">Primary-source pages were checked for these selected entries. Recorded Scholar title and visible-metadata matches are distinct from full author-list or claim verification. The complete index retains pending checks and version notes. <a href={repo+'/blob/main/docs/PROVENANCE.md'}>Read the provenance policy ↗</a></p>
      </section>
      <section className="section" id="benchmarks">
        <Heading number="04" title="What do the benchmarks cover?">Published resource statistics, with their original counting units. These are not comparable agent scores and do not constitute a Physical AGI leaderboard.</Heading>
        <Table className="benchmark-table"><TableHeader><TableRow><TableHead scope="col">Benchmark / release</TableHead><TableHead scope="col">Scale & unit</TableHead><TableHead scope="col">Coverage</TableHead><TableHead scope="col">Reading the number</TableHead></TableRow></TableHeader><TableBody>{project.benchmarks.map(b=><TableRow key={b.key}><TableCell><a href={b.url}>{b.name} ↗</a><span className="table-meta">{b.version}</span></TableCell><TableCell><strong className="quantity">{b.quantity}</strong><span className="table-meta">{b.unit}</span></TableCell><TableCell>{b.coverage}</TableCell><TableCell><p>{b.detail}</p><span className="table-meta">{b.caveat}</span></TableCell></TableRow>)}</TableBody></Table>
        <p className="caption">Counts are pinned to the releases shown—not to evolving leaderboards. <a href={repo+'/blob/main/docs/BENCHMARKS.md'}>Paper sections, numerical evidence, and version caveats ↗</a></p>
        <div className="protocol"><h3>A protocol for stronger evidence</h3><ol>{['Establish a frozen baseline','Test zero-shot novelty','Allow bounded adaptation','Check retained skills','Test further transfer'].map((step,i)=><li key={step}><span>0{i+1}</span>{step}</li>)}</ol><p>Report training exposure, demonstrations, interaction trials, adaptation compute, and human assistance alongside success and failure.</p></div>
      </section>
      <section className="section" id="questions"><Heading number="05" title="The questions that remain">A research agenda for turning broader architectures into measurable learning and transfer.</Heading><div className="questions">{questions.map(([title,detail],i)=><article key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{detail}</p></div></article>)}</div></section>
      <section className="section" id="cite"><Heading number="06" title="Use and contribute">Cite the manuscript as a working manuscript. Cite individual papers directly when using their methods, datasets, or results.</Heading><div className="cite-grid"><pre aria-label="Manuscript BibTeX citation"><code>{bibtex}</code></pre><div className="contribute"><h3>Keep the collection useful.</h3><p>Suggest a relevant paper, correct a source, or clarify an evaluation protocol. Include a primary link, the precise version, and a short explanation of its role.</p><a className="button" href={repo+'/blob/main/CONTRIBUTING.md'}>Contribution guidelines ↗</a><p className="caption">Paper titles and source links identify their original authors. No affiliation with, or endorsement by, cited organizations is implied.</p></div></div></section>
    </main>
    <footer><div className="wrap footer-inner"><div><a className="brand" href="#main">Physical <span>AGI</span></a><p>From language priors to evidence of generality.</p></div><div><a href={repo}>Repository ↗</a><span> · </span><a href={repo+'/blob/main/docs/PROVENANCE.md'}>Sources & provenance ↗</a><p>Independent academic project · September 2026</p></div></div></footer>
  </>;
}
