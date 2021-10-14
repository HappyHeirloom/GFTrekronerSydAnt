import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from "react-router-dom";
import './styles/App.css';

// Objects
import { pdfList } from "./objects/pdf";

// Component and pages
import FrontPage from './pages/frontPage';
import pdfOverview from './pages/pdfOverview';
import PdfViewer from "./pages/pdfViewer";
import Navbar from './components/navbar';
import Management from "./pages/management";
import Contact from "./pages/contact";
import GF from "./pages/gf";
import EF from "./pages/ef";
import Gfheader from './components/gfheader';
import FAQ from './pages/FAQ';
import login from './pages/login';
import AdminPanel from './pages/adminPanel';

//TESTS MONGODB
import Create from './components/create';
import Edit from './components/edit';
import AdminNewsfeed from './components/adminNewsList';


// Google analytics
import RouteChangeTracker from './RouteChangeTracker';
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-208535202-1";
ReactGA.initialize(TRACKING_ID);

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <RouteChangeTracker/>
      <Layout style={{ minHeight: '100vh' }}>
        <Navbar/>
        <Layout className="site-layout">
          <Header className="site-layout-background">
            <Gfheader></Gfheader>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ margin: '16px 0' }}>
            </div>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                <Route exact path="/" component={FrontPage}/>
                <Route path="/dokumenter" component={pdfOverview} />
                <Route
                path="/doc/parkering"
                component={() => (
                  <PdfViewer embedURL={pdfList.pdfs[0]} />
                )}
                />
                <Route
                path="/doc/reglement"
                component={() => (
                  <PdfViewer embedURL={pdfList.pdfs[1]} />
                )}
                />
                <Route
                path="/doc/plejebeskrivelse"
                component={() => (
                  <PdfViewer embedURL={pdfList.pdfs[2]} />
                )}
                />
                <Route
                path="/doc/resume"
                component={() => (
                  <PdfViewer embedURL={pdfList.pdfs[3]} />
                )}
                />
                <Route
                path="/doc/vedtægter"
                component={() => (
                  <PdfViewer embedURL={pdfList.pdfs[8]} />
                )}
                />
                <Route
                path="/doc/budget"
                component={() => (
                  <PdfViewer embedURL={pdfList.pdfs[9]} />
                )}
                />
                <Route
                path="/doc/udbudsmateriale"
                component={() => (
                  <PdfViewer embedURL={pdfList.pdfs[14]} />
                )}
                />
                <Route path="/bestyrelsen" component={Management} />
                <Route path="/kontakt" component={Contact} />
                <Route path="/GF" component={GF} />
                <Route path="/ejerforeningerne" component={EF} />

                  {/* MONGODB TESTS */}
                <Route path="/edit/:id" component={Edit}/>
                <Route path="/create">
                  <Create/>
                </Route>
                <Route path="/adminnewsfeed" component={AdminNewsfeed}/>
                <Route path="/FAQ" component={FAQ}/>
                <Route path="/admin" component={login}/>
                <Route path="/dashboard" component={AdminPanel}/>
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
