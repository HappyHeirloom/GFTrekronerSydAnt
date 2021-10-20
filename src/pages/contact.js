//#region Imports

import { React } from "react";
import { withRouter } from 'react-router-dom'

import EmailForm from "../components/emailForm";

import changeLanguage from "../components/languageComponent";
import {kontaktText} from '../objectText/kontaktText';

import '../styles/contact.css';

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
    <div className="contactWrapper">
      <div className="contactContainer">
          <div className="content information">
            <h1 className="title">
            {text[0].header}
            </h1>
            <p className="text">
            {text[0].text}
            </p>
            <p className="text">
            {text[0].text1}
            </p>
          </div>
          <div className="content email">
            <h1 className="title"> Smid os en email </h1>
            <EmailForm/>
          </div>
      </div>
    </div>
  );

  //#endregion

}

export default withRouter(Contact);
