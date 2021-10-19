//#region Imports

import { React } from "react";
import { withRouter } from 'react-router-dom'

import EmailForm from "../components/emailForm";

import changeLanguage from "../components/languageComponent";
import {kontaktText} from '../objectText/kontaktText';


import "../styles/App.css";

//#endregion

function Contact() {
  var text = "";
  if(changeLanguage() ? text = kontaktText.kontaktText_EN  : text = kontaktText.kontaktText_DK);  

  //#region React hooks

  //#endregion

  //#region Functions

  //#endregion

  //#region Html code

  return (
    <div className="row">
      <div className="col-6 my-auto">
        <div className="text-center">
          <h1 className="mb-5">
            {text[0].header}
          </h1>
          <p>
            {text[0].text}
          </p>
        </div>
      </div>

      {/* Submit emails form */}
      <div className="col-6 my-auto">
        <div className="email">
          <EmailForm/>
        </div>
      </div>
    </div>
  );

  //#endregion

}

export default withRouter(Contact);
