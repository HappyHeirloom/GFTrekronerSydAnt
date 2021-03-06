//#region Imports
import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import changeLanguage from "../components/languageComponent";
import {MiscText} from '../objectText/miscText';
import {pdfOverviewText} from '../objectText/pdfOverviewText';


// Objects
import { pdfList } from "../objects/pdf";

// Styles
//import "../styles/button.css";
import "../styles/pdfViewer.css";
import "..styles/adminPanel.css";

//#endregion




function PdfViewer(embedURL) {
  //#region React hooks and variables
  var [prop, updateURL] = useState(embedURL.embedURL);
  var [currentPdf, updateCurrentPdf] = useState(prop.name);
  var [loaded, updateLoaded] = useState(false);
  var listOfPdf = pdfList.pdfs;
  
  var text = "";
  var header = "";
  var sideText = "";
  var buttonText = "";
  var pdfButtonText = "";
  var number = 0;
  if(changeLanguage() ? sideText = MiscText.ButtonDokSideText_EN  : sideText = MiscText.ButtonDokSideText_DK);  
  if(changeLanguage() ? buttonText = MiscText.ButtonText_EN  : buttonText = MiscText.ButtonText_DK);  
  if(changeLanguage() ? text = prop.text_en  : text = prop.text_dk);
  if(changeLanguage() ? header = prop.header_en  : header = prop.header_dk);
  if(changeLanguage() ? pdfButtonText = pdfOverviewText.pdfOverviewText_EN : pdfButtonText = pdfOverviewText.pdfOverviewText_DK);
  //#endregion

  //#region Functions

  function raiseNumber(){
    number++;
  }

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
    if(loaded === false){
      checkPdf(prop);    

      //eslint-disable-next-line
      updateLoaded(loaded = true);
      document.title = currentPdf;
    } else {
      document.title = currentPdf;
    }
  });

  //#endregion

//#region HTML code
  return (
    <div className="">          
      <div className="buttonsSubject">
        <button
          variant="contained"
          size="large"
          className="button"
          onClick={() => {
            checkPdf(listOfPdf[0]);
          }}
        >
          {" "}
          <Link to="/doc/parkering">
            {pdfButtonText[number].header}{" "}
          </Link>
          {raiseNumber()}
        </button>
        <button
          variant="contained"
          size="large"
          className="button"
          onClick={() => checkPdf(listOfPdf[1])}
        >
          {" "}
          <Link to="/doc/reglement">
            {pdfButtonText[number].header}{" "}
          </Link>
          {raiseNumber()}
        </button>
        <button
          variant="contained"
          size="large"
          className="button"
          onClick={() => checkPdf(listOfPdf[2])}
        >
          {" "}
          <Link to="/doc/plejebeskrivelse">
            {pdfButtonText[number].header}{" "}
          </Link>
          {raiseNumber()}
        </button>
        <button
          variant="contained"
          size="large"
          className="button"
          onClick={() => checkPdf(listOfPdf[3])}
        >
          {" "}
          <Link to="/doc/resume">
            {pdfButtonText[number].header}{" "}
          </Link>
          {raiseNumber()}
        </button>
        <button
          variant="contained"
          size="large"
          className="button"
          onClick={() => checkPdf(listOfPdf[8])}
        >
          {" "}
          <Link to="/doc/vedt??gter">
            {pdfButtonText[number].header}{" "}
          </Link>
          {raiseNumber()}
        </button>
        <button
          variant="contained"
          size="large"
          className="button"
          onClick={() => checkPdf(listOfPdf[9])}
        >
          {" "}
          <Link to="/doc/budget">
            {pdfButtonText[number].header}{" "}
          </Link>
          {raiseNumber()}
        </button>
        <button
          variant="contained"
          size="large"
          className="button"
          onClick={() => checkPdf(listOfPdf[14])}
        >
          {" "}
          <Link to="/doc/udbudsmateriale">
            {pdfButtonText[number].header}{" "}
          </Link>
        </button>
      </div>

      <div className="buttonsYear hidden" id="buttonsYear">
        <button
          variant="contained"
          size="large"
          className="button"
          id="21"
          onClick={() => checkYear(prop, 21)}
        >
          2021
        </button>
        <button
          variant="contained"
          size="large"
          className="button"
          id="20"
          onClick={() => checkYear(prop, 20)}
        >
          2020
        </button>
        <button
          variant="contained"
          size="large"
          className="button"
          id="19"
          onClick={() => checkYear(prop, 19)}
        >
          2019
        </button>
        <button
          variant="contained"
          size="large"
          className="button"
          id="18"
          onClick={() => checkYear(prop, 18)}
        >
          2018
        </button>
        <button
          variant="contained"
          size="large"
          className="button"  
          id="17"
          onClick={() => checkYear(prop, 17)}
        >
          2017
        </button>
      </div>

      <div id="pdftextdiv" className="p-3">
        <h4>
          {header}
        </h4>
        <div className="pdftext p-1">
          {text}
        </div>
        
      </div>


    {/* Alle buttons og buttonstext ligger under /objectText/miscText.js */}
      <div className="container pdfViewer" id="pdfViewer">
        <iframe title="PDF" src={prop.embedURL} width="100%" height="800" />
      </div>
      <div className="pdfLink" id="pdfLink">
        <p>
          {" "}
          {sideText[0].text} {currentPdf} {" "}
        </p>
          <a href={prop.embedURL} target="_blank" rel="noreferrer">
          {" "}
          <button variant="contained">{buttonText[0].text}</button>{" "}
        </a>
      </div>
    </div>
  );
  //#endregion
}


export default withRouter(PdfViewer);
