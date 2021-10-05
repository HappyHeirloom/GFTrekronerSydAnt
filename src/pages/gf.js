//#region Imports
import React from "react"
import { withRouter, Link } from "react-router-dom";
import changeLanguage from "../components/languageComponent";
import {gfText} from '../components/objectText/gfText';
import {MiscText} from '../components/objectText/miscText';

//#endregion

function Gf() {
  var text = "";
  var sideText = "";
  var buttonText = "";
  var number = 0;
  if(changeLanguage() ? text = gfText.gfText_EN  : text = gfText.gfText_DK);  
  if(changeLanguage() ? sideText = MiscText.ButtonGFSideText_EN  : sideText = MiscText.ButtonGFSideText_DK);  
  if(changeLanguage() ? buttonText = MiscText.ButtonText_EN  : buttonText = MiscText.ButtonText_DK);  

  function raiseNumber(){
    number++;
  }

  //#region HTML code
  return (
    <div className="">
      <h1 className="text-center p-3">Grundejerforeningen</h1>
      <div className="">
        <div className="row p-2">
          <div className="col-md-6">
            <h3>{text[number].header}</h3>
            <p>
              {text[number].text}
            </p>
            {raiseNumber()}
          </div>
          <div className="col-md-6">
            <h3>{text[number].header}</h3>
            <p>
              {text[number].text}
            </p>
            {raiseNumber()}
          </div>
        </div>
        <div className="row p-2">
          <div className="col-md-6">
            <h3>{text[number].header}</h3>
            <p>
              {text[number].text}
            </p>
            {raiseNumber()}
          </div>
          <div className="col-md-6">
            <h3>{text[number].header}</h3>
            <p>
              {text[number].text}
            </p>
         </div>
        </div>
        </div>
        <div className="text-center">
          <strong className="text-center"> {sideText[0].text}</strong>
      <button variant="outlined" className="m-3"> <Link to ="/ejerforeningerne"> {buttonText[0].text} </Link></button>
        </div>
    </div>

  );
  //#endregion
}

export default withRouter(Gf);
