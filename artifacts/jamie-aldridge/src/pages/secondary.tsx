import { ArrowUpRight, Code2, Download, FlaskConical, Leaf, LockKeyhole, Trophy } from 'lucide-react';
import { Link } from 'wouter';
import { labProjects, links, principles } from '../data';
import { ClosingCTA, PageMeta } from '../components/site';

const icons = [Trophy, LockKeyhole, Leaf, Code2];

export function LabPage() {
  return <><PageMeta title="The Lab" description="Jamie Aldridge builds hands-on side projects and AI-assisted tools, from Full Court to a Texas gardening prototype and this portfolio." /><main>
    <section className="page-hero"><div className="container page-enter"><span className="eyebrow" style={{color:'#1761c5'}}>THE LAB / BUILDING IN PUBLIC</span><h1 className="display">Curiosity has<br />a shipping date.</h1><p>I build to stay close to the craft — and to what AI tooling can now do.</p></div></section>
    <div className="container lab-grid">{labProjects.map((project,i) => { const Icon = icons[i]; return <article className="lab-card" key={project.title} data-testid={`card-lab-${i}`}>
      <div className="lab-card-top"><span className="lab-icon"><Icon size={23} strokeWidth={1.8} /></span><span className="eyebrow" style={{color:'#82909c'}}>EXPERIMENT / 0{i+1}</span></div>
      <h2>{project.title}</h2><p><b>The problem.</b> {project.problem}</p><p><b>What I built.</b> {project.built}</p>
      <div className="lab-card-bottom"><div className="tool-tags">{project.tools.map(tool=><span key={tool}>{tool}</span>)}</div>{project.link==='/' ? <Link href="/" className="inline-link" data-testid="link-lab-this-site">Explore site <ArrowUpRight size={14} /></Link> : <span className="lab-placeholder">{project.label}</span>}</div>
    </article>; })}</div>
    <ClosingCTA />
  </main></>;
}

export function AboutPage() {
  return <><PageMeta title="About & Resume" description="Meet Jamie Aldridge, a growth product leader specializing in subscription monetization, payments, and cross-functional growth teams." /><main>
    <section className="container about-intro"><div className="page-enter"><span className="eyebrow" style={{color:'#1761c5'}}>ABOUT / THE PERSON BEHIND THE METRICS</span><h1 className="display">Product-minded.<br />Outcome-driven.</h1>
      <p>Jamie Aldridge is a growth product leader who specializes in turning free users into paying subscribers. Over the past decade, Jamie has led growth and monetization efforts at consumer subscription companies, most notably building and running the Growth Team at MyFitnessPal. Jamie's focus sits at the intersection of pricing, paywalls, subscription lifecycle, and payments infrastructure — the unglamorous plumbing that determines whether a great product actually makes money.</p>
      <p>Outside of core product work, Jamie serves as commissioner of the AGBL, running league operations, scheduling, and rules for a real, active community. It's a different kind of product management with its own stakeholders and edge cases. Jamie also builds side projects to stay involved with code and to keep pace with what AI tooling now makes possible for a single builder. Based in Austin, Jamie is looking for the next senior growth or monetization role at a consumer subscription company.</p>
      <div className="button-row" style={{marginTop:27}}><a href={links.resume} download className="btn btn-blue" data-testid="link-about-resume"><Download size={15} /> Download Resume (PDF)</a><a href={links.calendar} target="_blank" rel="noreferrer" className="btn btn-light" data-testid="link-about-calendar">Book a Call <ArrowUpRight size={15} /></a></div>
    </div><div className="portrait-wrap page-enter delay-1"><img src={`${import.meta.env.BASE_URL}JamIE_.png`} alt="Jamie Aldridge" data-testid="img-jamie-portrait" /><span className="portrait-caption">JAMIE ALDRIDGE / GROWTH PM</span></div></section>
    <section className="principles"><div className="container principles-layout"><div><span className="eyebrow" style={{color:'#087c70'}}>THE PLAYBOOK</span><h2 className="display">Operating<br />principles.</h2></div><div>{principles.map((principle,i)=><div className="principle" key={i}><span className="eyebrow">0{i+1}</span><p>{principle}</p></div>)}</div></div></section>
    <section className="resume-section"><div className="container resume-layout"><div><span className="eyebrow" style={{color:'#1761c5'}}>EXPERIENCE / CONDENSED</span><h2 className="display">The short<br />version.</h2><p style={{color:'#627080',fontSize:13,lineHeight:1.7,maxWidth:250}}>A working summary. For the full story, download the resume or let's talk.</p><a href={links.resume} download className="inline-link" data-testid="link-resume-section">Download Resume (PDF) <Download size={14} /></a></div>
      <div>
        {[
          ['01 / GROWTH', 'Growth Team Lead', 'MyFitnessPal', 'Led growth team responsible for subscription acquisition and retention.'],
          ['02 / MONETIZATION', 'Senior Growth PM', 'Subscription products', 'Led paywall, pricing, and cross-platform payments initiatives.'],
          ['03 / COMMUNITY', 'Commissioner', 'AGBL', 'Runs league operations for an active amateur sports league.'],
          ['04 / EARLIER', 'Education / earlier career', 'Details to come', 'Additional background and dates to be added.'],
        ].map(([num,role,company,description])=><div className="resume-row" key={num}><span className="mono">{num}</span><div><strong>{role}</strong><p><b style={{color:'#1761c5'}}>{company}</b> — {description}</p></div></div>)}
      </div></div></section>
    <section className="community"><div className="container community-inner"><div className="community-badge">AGBL<small>COMMISSIONER</small></div><div><span className="eyebrow">BEYOND THE DAY JOB</span><h2>Real community. Real operational complexity.</h2><p>As commissioner of the AGBL, Jamie manages scheduling, rules, and disputes for an active amateur sports league. It's another kind of product leadership: listening to stakeholders, designing fair systems, and keeping something people care about running well.</p></div></div></section>
    <ClosingCTA />
  </main></>;
}