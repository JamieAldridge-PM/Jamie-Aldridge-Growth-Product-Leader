import { Route, Switch, Router as WouterRouter, useParams } from 'wouter';
import { cases } from './data';
import { AboutPage, LabPage } from './pages/secondary';
import { CaseDetailPage, CaseIndexPage, Footer, Header, HomePage, NotFoundPage } from './components/site';

function CaseRoute() {
  const { slug } = useParams<{ slug: string }>();
  const item = cases.find(c => c.slug === slug);
  return item ? <CaseDetailPage item={item} /> : <NotFoundPage />;
}

function App() {
  return <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
    <div className="min-h-[100dvh]" style={{ display:'flex', flexDirection:'column' }}>
      <Header />
      <div style={{ flex:1 }}>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/case-studies" component={CaseIndexPage} />
          <Route path="/case-studies/:slug" component={CaseRoute} />
          <Route path="/lab" component={LabPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  </WouterRouter>;
}

export default App;