//#region Imports
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

// Objects
import { pdfList } from "../objects/pdf";

// Styles
import "../styles/button.css";
import "../styles/pdfViewer.css";

//#endregion



function PdfViewer(embedURL) {
  //#region React hooks and variables
  var [prop, updateURL] = useState(embedURL.embedURL);
  var [currentPdf, updateCurrentPdf] = useState(prop.name);
  var [loaded, updateLoaded] = useState(false);
  var listOfPdf = pdfList.pdfs;
  
  //#endregion

  //#region Functions
  // Checks given pdf if we should show the buttons for the year
  function checkPdf(pdf) {
    var but = document.getElementById("buttonsYear");
    updateURL((prop = pdf));
    updateCurrentPdf((currentPdf = prop.name));

    if (pdf === listOfPdf[3] || pdf === listOfPdf[9]) {
      but.classList.remove("hidden");
      but.classList.add("display");
    } else {
      but.classList.remove("display");
      but.classList.add("hidden");
    }
  }

  // Get the given pdf and set the correct year.
  function checkYear(pdf, year) {
    if (
      pdf === listOfPdf[3] ||
      pdf === listOfPdf[4] ||
      pdf === listOfPdf[5] ||
      pdf === listOfPdf[6] ||
      pdf === listOfPdf[7]
    ) {
      if (year === 21) {
        updateURL((prop = listOfPdf[3]));
        updateCurrentPdf((currentPdf = prop.name));
      } else if (year === 20) {
        updateURL((prop = listOfPdf[4]));
        updateCurrentPdf((currentPdf = prop.name));
      } else if (year === 19) {
        updateURL((prop = listOfPdf[5]));
        updateCurrentPdf((currentPdf = prop.name));
      } else if (year === 18) {
        updateURL((prop = listOfPdf[6]));
        updateCurrentPdf((currentPdf = prop.name));
      } else if (year === 17) {
        updateURL((prop = listOfPdf[7]));
        updateCurrentPdf((currentPdf = prop.name));
      }
    }
    if (
      pdf === listOfPdf[9] ||
      pdf === listOfPdf[10] ||
      pdf === listOfPdf[11] ||
      pdf === listOfPdf[12] ||
      pdf === listOfPdf[13]
    ) {
      if (year === 21) {
        updateURL((prop = listOfPdf[9]));
        updateCurrentPdf((currentPdf = prop.name));
      } else if (year === 20) {
        updateURL((prop = listOfPdf[10]));
        updateCurrentPdf((currentPdf = prop.name));
      } else if (year === 19) {
        updateURL((prop = listOfPdf[11]));
        updateCurrentPdf((currentPdf = prop.name));
      } else if (year === 18) {
        updateURL((prop = listOfPdf[12]));
        updateCurrentPdf((currentPdf = prop.name));
      } else if (year === 17) {
        updateURL((prop = listOfPdf[13]));
        updateCurrentPdf((currentPdf = prop.name));
      }
    }
  }

  useEffect(() => {
    if(loaded == false){
      checkPdf(prop);    
      updateLoaded(loaded = true);
      document.title = currentPdf;
    } else {
      document.title = currentPdf;
    }
  });

  //#endregion

//#region HTML code
  return (
    <div className="mainFront">
      <div className="row pdfHeader">
        <h1>PDF View!</h1>
      </div>
      <div className="row mh-100">
        <div className="col-md-4">
          <div className="row">
            <div className="col">
              
              <div className="buttonsSubject">
                <button
                  variant="contained"
                  size="large"
                  className="button p-2 m-1 w-100"
                  onClick={() => {
                    checkPdf(listOfPdf[0]);
                  }}
                >
                  {" "}
                  Parkering{" "}
                </button>
                <button
                  variant="contained"
                  size="large"
                  className="button p-2 m-1 w-100"
                  onClick={() => checkPdf(listOfPdf[1])}
                >
                  {" "}
                  Reglement{" "}
                </button>
                <button
                  variant="contained"
                  size="large"
                  className="button p-2 m-1 w-100"
                  onClick={() => checkPdf(listOfPdf[2])}
                >
                  {" "}
                  Plejebeskrivelse{" "}
                </button>
                <button
                  variant="contained"
                  size="large"
                  className="button p-2 m-1 w-100"
                  onClick={() => checkPdf(listOfPdf[3])}
                >
                  {" "}
                  Referat generalforsamling{" "}
                </button>
                <button
                  variant="contained"
                  size="large"
                  className="button p-2 m-1 w-100"
                  onClick={() => checkPdf(listOfPdf[8])}
                >
                  {" "}
                  Vedtægter{" "}
                </button>
                <button
                  variant="contained"
                  size="large"
                  className="button p-2 m-1 w-100"
                  onClick={() => checkPdf(listOfPdf[9])}
                >
                  {" "}
                  Budget{" "}
                </button>
                <button
                  variant="contained"
                  size="large"
                  className="button p-2 m-1 w-100"
                  onClick={() => checkPdf(listOfPdf[14])}
                >
                  {" "}
                  Udbudsmateriale{" "}
                </button>
              </div>
            </div>

            <div className="col">
              <div className="buttonsYear hidden" id="buttonsYear">
                <button
                  variant="contained"
                  size="large"
                  className="button p-2 m-1 w-100"
                  id="21"
                  onClick={() => checkYear(prop, 21)}
                >
                  2021
                </button>
                <button
                  variant="contained"
                  size="large"
                  className="button p-2 m-1 w-100"
                  id="20"
                  onClick={() => checkYear(prop, 20)}
                >
                  2020
                </button>
                <button
                  variant="contained"
                  size="large"
                  className="button p-2 m-1 w-100"
                  id="19"
                  onClick={() => checkYear(prop, 19)}
                >
                  2019
                </button>
                <button
                  variant="contained"
                  size="large"
                  className="button p-2 m-1 w-100"
                  id="18"
                  onClick={() => checkYear(prop, 18)}
                >
                  2018
                </button>
                <button
                  variant="contained"
                  size="large"
                  className="button p-2 m-1 w-100"
                  id="17"
                  onClick={() => checkYear(prop, 17)}
                >
                  2017
                </button>
              </div>
            </div>
          </div>
          <div className="row p-3">
            <div id="pdftextdiv" className="p-3">
              <h4>
                {prop.header}
              </h4>
              <div className="pdftext p-1">
                {prop.text}
              </div>
              
            </div>
            </div>
        </div>
        <div className="col-md-8">
          <div className="container pdfViewer" id="pdfViewer">
            <iframe title="PDF" src={prop.embedURL} width="100%" height="800" />
          </div>
          <div className="pdfLink" id="pdfLink">
            <p>
              {" "}
              Din skærm er for lille, klik her for at se {currentPdf} pdf.{" "}
            </p>
            <a href={prop.embedURL}>
              {" "}
              <button variant="contained">Klik her!</button>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  //#endregion
}


export default withRouter(PdfViewer);
