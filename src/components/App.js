//#region Imports
// React stuff
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Objects
import { pdfList } from "../objects/pdf";

// Component and pages
import PdfOverview from "../pages/pdfOverview";
import PdfViewer from "../pages/pdfViewer";
import NavbarTest from "./navbarTest";
import Management from "../pages/management";
import Contact from "../pages/contact";
import GF from "../pages/gf";
import EF from "../pages/ef";

// Styles
import '../styles/App.css';

//#endregion

class App extends Component {
  //#region HTML Code
  render() {
    return (
      <div className="Main">
        <div className="navbar">
          <NavbarTest></NavbarTest>
        </div>
        <div className="mainView p-2 pt-5" id="mainView">
          <Switch>
            <Route exact path="/" />
            <Route path="/dokumenter" component={PdfOverview} />
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
          </Switch>
        </div>
      </div>
    );
  }
  //#endregion
}

export default App;
