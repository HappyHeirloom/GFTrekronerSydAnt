//#region Imports
import React from "react"
import { withRouter, Link } from "react-router-dom";
import changeLanguage from "../components/languageComponent";
import {gfText} from '../components/objectText/gfText';

//#endregion

function Gf() {
  var text = "";
  var number = 0;
  if(changeLanguage() ? text = gfText.gfText_EN  : text = gfText.gfText_DK);  

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
            <h5>{text[number].header}</h5>
            <p>
              {text[number].text}
            </p>
            {raiseNumber()}
          </div>
          <div className="col-md-6">
            <h5>{text[number].header}</h5>
            <p>
              {text[number].text}
            </p>
            {raiseNumber()}
          </div>
        </div>
        <div className="row p-2">
          <div className="col-md-6">
            <h5>{text[number].header}</h5>
            <p>
              {text[number].text}
            </p>
            {raiseNumber()}
          </div>
          <div className="col-md-6">
            <h5>{text[number].header}</h5>
            <p>
              {text[number].text}
            </p>
         </div>
        </div>
        </div>
        <div className="text-center">
          <strong className="text-center"> På knappen kan du se alle ejerforeningerne</strong>
      <button variant="outlined" className="m-3"> <Link to ="/ejerforeningerne"> Klik her </Link></button>
        </div>
    </div>

  );
  //#endregion
}

export default withRouter(Gf);
