import { useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Download, Mail } from 'lucide-react';
import { cases, links, type CaseStudy } from '../data';

export function PageMeta({ title, description }: { title: string; description: string }) {
  const [location] = useLocation();
  useEffect(() => {
    document.title = `${title} | Jamie Aldridge`;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, location]);
  return null;
}

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Lab', href: '/lab' },
  { label: 'About / Resume', href: '/about' },
];

export function Header() {
  const [location] = useLocation();
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Jamie Aldridge home" data-testid="link-brand">
          <span className="brand-mark">JA</span>
          <span className="brand-name">Jamie<span>.</span> Aldridge</span>
        </Link>
        <nav className="main-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = item.href === '/' ? location === '/' : location === item.href || (item.href === '/case-studies' && location.startsWith('/case-studies/'));
            return <Link key={item.href} href={item.href} className={`nav-link ${active ? 'active' : ''}`} aria-current={active ? 'page' : undefined} data-testid={`link-nav-${item.label.toLowerCase().replace(/[^a-z]+/g, '-')}`}>{item.label}</Link>;
          })}
        </nav>
        <div className="header-status"><span className="status-dot" /> Open to the right opportunity</div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="brand" data-testid="link-footer-home"><span className="brand-mark">JA</span><span className="brand-name">Jamie Aldridge</span></Link>
            <p>Growth product leader. Subscription monetization operator.</p>
          </div>
          <div className="footer-links">
            <a href={links.email} data-testid="link-footer-email"><Mail size={14} /> hello@jamiealdridge.com</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" data-testid="link-footer-linkedin">LinkedIn <ArrowUpRight size={14} /></a>
            <a href={links.resume} download data-testid="link-footer-resume"><Download size={14} /> Download Resume (PDF)</a>
            <a href={links.calendar} target="_blank" rel="noreferrer" className="footer-book" data-testid="link-footer-calendar">Book a Call <ArrowUpRight size={14} /></a>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Jamie Aldridge. All rights reserved.</span><span>Built close to the craft. Measured by the outcome.</span></div>
      </div>
    </footer>
  );
}

export function Dashboard() {
  return (
    <div className="dashboard page-enter delay-2" aria-label="Illustrative subscription growth analytics dashboard">
      <div className="dash-top"><div className="dash-dots"><i /><i /><i /></div><span className="eyebrow" style={{ color: '#75859a', fontSize: 9 }}>MONETIZATION / OVERVIEW</span><ArrowUpRight size={14} color="#718093" /></div>
      <div className="dash-body">
        <div className="dash-label"><span className="eyebrow" style={{ fontSize: 9 }}>TRIAL → PAID CONVERSION</span><b>↑ ABOVE BASELINE</b></div>
        <div className="dash-number">+24% <small>↗</small></div>
        <div className="dash-sub">Relative lift from pricing experiments</div>
        <svg className="chart" viewBox="0 0 440 150" role="img" aria-label="Illustrative upward conversion trend chart" preserveAspectRatio="none">
          <defs><pattern id="grid" width="44" height="37.5" patternUnits="userSpaceOnUse"><path d="M 44 0 L 0 0 0 37.5" fill="none" stroke="#e5ebee" strokeWidth="1" /></pattern><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#17a18d" stopOpacity=".18" /><stop offset="100%" stopColor="#17a18d" stopOpacity="0" /></linearGradient></defs>
          <rect width="440" height="150" fill="url(#grid)" />
          <path d="M0 125 C30 120 38 127 66 112 S103 125 130 104 S173 105 198 90 S230 99 257 76 S289 85 318 58 S350 70 382 39 S416 48 440 19 L440 150 L0 150Z" fill="url(#chartFill)" />
          <path d="M0 125 C30 120 38 127 66 112 S103 125 130 104 S173 105 198 90 S230 99 257 76 S289 85 318 58 S350 70 382 39 S416 48 440 19" fill="none" stroke="#0b947d" strokeWidth="3" strokeLinecap="round" />
          <circle cx="440" cy="19" r="5" fill="#0b947d" stroke="#fff" strokeWidth="3" />
        </svg>
        <div className="dash-bottom"><div><span className="eyebrow" style={{ fontSize: 9 }}>EXPERIMENTS SHIPPED</span><strong>120+</strong></div><div><span className="eyebrow" style={{ fontSize: 9 }}>ARR INFLUENCED</span><strong>$18M+</strong></div></div>
      </div>
    </div>
  );
}

function CardVisual({ type, index }: { type: CaseStudy['visual']; index: number }) {
  return (
    <div className={`card-visual visual-${type}`} aria-hidden="true">
      <div className="visual-grid" />
      <span className="visual-pill">CASE STUDY / 0{index + 1}</span>
      {type === 'paywall' && <div className="paywall-mini"><b>Choose your plan</b><span>Monthly plan · Flexible</span><span>Annual plan · Best value</span></div>}
      {type === 'payments' && <div className="payment-visual-icons"><span>S</span><i /><span></span><i /><span>G</span></div>}
      {type === 'growth' && <div className="growth-bars">{[34, 50, 43, 64, 59, 76, 71, 91].map((n, i) => <span key={i} style={{ height: `${n}%` }} />)}</div>}
    </div>
  );
}

export function CaseCard({ item, index }: { item: CaseStudy; index: number }) {
  return <Link href={`/case-studies/${item.slug}`} className="case-card" data-testid={`link-case-${item.slug}`}>
    <CardVisual type={item.visual} index={index} />
    <div className="case-card-body">
      <span className="card-index eyebrow">0{index + 1} / {item.visual === 'paywall' ? 'PRICING & PAYWALLS' : item.visual === 'payments' ? 'PAYMENTS INFRASTRUCTURE' : 'GROWTH LEADERSHIP'}</span>
      <h3>{item.title}</h3><p>{item.outcome}</p>
      <div className="case-card-bottom"><span className="card-metric" data-testid={`text-metric-${item.slug}`}>{item.metric}</span><span className="card-arrow"><ArrowUpRight size={16} /></span></div>
    </div>
  </Link>;
}

export function ClosingCTA() {
  return <section className="closing"><div className="container closing-inner">
    <div><span className="eyebrow" style={{ color: '#f6ca28' }}>LET'S TALK GROWTH</span><h2 className="display">The next chapter<br />starts with a conversation.</h2><p>Looking for a senior growth or monetization leader who can connect product strategy to real subscription outcomes?</p></div>
    <a href={links.calendar} className="btn btn-yellow" target="_blank" rel="noreferrer" data-testid="link-cta-calendar">Book a Call <ArrowUpRight size={16} /></a>
  </div></section>;
}

export function HomePage() {
  return <>
    <PageMeta title="Growth Product Leader" description="Jamie Aldridge turns free users into paying subscribers through paywalls, pricing, lifecycle, and payments expertise across Stripe, Apple StoreKit, and Google Play." />
    <main>
      <section className="hero"><div className="container hero-grid">
        <div className="page-enter"><div className="hero-kicker eyebrow">GROWTH PRODUCT LEADER / SUBSCRIPTION MONETIZATION</div>
          <h1 className="display">I turn free users into <em>paying subscribers.</em></h1>
          <p className="hero-copy">Growth product leader specializing in paywalls, pricing, and subscription lifecycle — with hands-on payments expertise across Stripe, Apple StoreKit, and Google Play.</p>
          <div className="button-row"><Link href="/case-studies" className="btn btn-blue" data-testid="link-home-cases">View Case Studies <ArrowUpRight size={16} /></Link><a href={links.resume} className="btn btn-light" download data-testid="link-home-resume"><Download size={15} /> Download Resume</a></div>
          <div className="hero-note"><span className="status-dot" /> <strong>Currently exploring</strong> senior growth & monetization roles</div>
        </div>
        <Dashboard />
      </div></section>
      <section className="proof-band" aria-label="Selected impact"><div className="container proof-inner">
        {[['+24%', 'average trial-to-paid conversion lift across shipped pricing experiments'], ['$18M+', 'incremental ARR influenced'], ['120+', 'growth experiments shipped'], ['4–15', 'team members led across product, eng, and data']].map(([value, description], i) => <div className="proof-item page-enter" style={{ animationDelay: `${i * .08}s` }} key={value}><div className="proof-value" data-testid={`text-proof-${i}`}>{value}</div><div className="proof-desc">{description}</div></div>)}
      </div></section>
      <section className="section"><div className="container"><div className="section-topline" /><div className="section-head"><div><span className="eyebrow" style={{ color: '#1761c5' }}>SELECTED WORK / 01—03</span><h2 className="display">Outcomes, not output.</h2></div><Link href="/case-studies" className="inline-link" data-testid="link-all-cases">All case studies <ArrowUpRight size={15} /></Link></div><div className="case-grid">{cases.map((item, i) => <CaseCard key={item.slug} item={item} index={i} />)}</div></div></section>
      <section className="method-band"><div className="container method-layout"><div><span className="eyebrow" style={{ color:'#087c70' }}>HOW I WORK</span><h2 className="display">Find the signal.<br />Build the system.</h2><p>Great monetization work lives between the customer moment and the underlying infrastructure. I work across both.</p><Link href="/about" className="inline-link" data-testid="link-home-about">More about my approach <ArrowRight size={15} /></Link></div><div className="method-list">{[['01', 'Start with a written hypothesis'], ['02', 'Ship the smallest useful test'], ['03', 'Measure conversion and retention'], ['04', 'Make the learning reusable']].map(([num, text]) => <div key={num}><span className="mono">{num}</span>{text}</div>)}</div></div></section>
      <ClosingCTA />
    </main>
  </>;
}

export function CaseIndexPage() {
  return <><PageMeta title="Case Studies" description="Three case studies from Jamie Aldridge on paywall conversion, unified payments across Stripe, Apple and Google, and leading subscription growth at MyFitnessPal." /><main><div className="page-hero"><div className="container page-enter"><span className="eyebrow" style={{ color:'#1761c5' }}>SELECTED WORK / CASE STUDIES</span><h1 className="display">The work behind<br />the numbers.</h1><p>Three stories about finding the right lever, building with the team, and measuring what actually changed.</p></div></div><div className="container case-index-grid"><div className="case-grid">{cases.map((item,i)=><CaseCard item={item} index={i} key={item.slug} />)}</div></div><ClosingCTA /></main></>;
}

export function CaseDetailPage({ item }: { item: CaseStudy }) {
  const index = cases.findIndex(c => c.slug === item.slug);
  const next = cases[(index + 1) % cases.length];
  const sections = [
    ['context', 'Context & Problem', item.context],
    ['hypothesis', 'Hypothesis', item.hypothesis],
    ['shipped', 'What Was Shipped', item.shipped],
    ['results', 'Results', item.results],
    ['reflection', "Reflection — What I'd Do Differently", item.reflection],
  ];
  return <><PageMeta title={item.title} description={item.outcome} /><main>
    <section className="detail-hero"><div className="container"><Link href="/case-studies" className="back-link" data-testid="link-back-cases"><ArrowLeft size={14} /> ALL CASE STUDIES</Link><div className="detail-heading page-enter"><div><span className="eyebrow" style={{ color:'#1761c5' }}>CASE STUDY / 0{index+1} OF 03</span><h1 className="display">{item.title}</h1><p>{item.outcome}</p></div><div className="detail-stamp"><span className="eyebrow">THE OUTCOME</span><strong>{item.metric}</strong><ArrowDownRight size={21} style={{ marginTop: 14 }} /></div></div></div></section>
    <div className="container"><div className="glance" data-testid="box-at-a-glance"><div className="glance-title eyebrow">AT A GLANCE / PROJECT SNAPSHOT</div><div className="glance-grid">{[['Role',item.role],['Team',item.team],['Timeline',item.timeline],['Outcome',item.glanceOutcome]].map(([label,value])=><div className="glance-item" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div>
      <div className="article-layout"><aside className="article-nav"><span className="eyebrow">ON THIS PAGE</span>{sections.map(([id,title])=><a key={id} href={`#${id}`} data-testid={`link-section-${id}`}>{title}</a>)}</aside><article>{sections.map(([id,title,text],i)=><div key={id}>{i>0&&<hr className="article-rule" />}<section id={id} className="article-section"><span className="eyebrow" style={{ color:'#087c70' }}>0{i+1} / THE PROCESS</span><h2>{title}</h2>{id==='results' ? <div className="result-panel"><strong>{item.metric}</strong><p>{text}</p></div> : <p>{text}</p>}</section></div>)}</article></div>
      <div className="next-case"><div><span className="eyebrow" style={{color:'#718093'}}>UP NEXT / CASE STUDY 0{(index+1)%cases.length+1}</span><h3>{next.title}</h3></div><Link href={`/case-studies/${next.slug}`} className="btn btn-blue" data-testid="link-next-case">Read next <ArrowRight size={16} /></Link></div>
    </div><ClosingCTA /></main></>;
}

export function NotFoundPage() {
  return <><PageMeta title="Page Not Found" description="The page you were looking for could not be found. Explore Jamie Aldridge's portfolio instead." /><main className="not-found"><div><span className="eyebrow">NOT IN THE EXPERIMENT BACKLOG</span><h1 className="display">404</h1><p>This page doesn't exist. Let's get you back to the work.</p><Link href="/" className="btn btn-blue" data-testid="link-404-home">Back to home <ArrowRight size={16} /></Link></div></main></>;
}