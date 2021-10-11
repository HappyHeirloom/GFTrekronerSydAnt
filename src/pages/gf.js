//#region Imports
import React from "react"
import { withRouter, Link } from "react-router-dom";
import changeLanguage from "../components/languageComponent";
import {gfText} from '../components/objectText/gfText';
import {MiscText} from '../components/objectText/miscText';
import { Col, Row } from 'antd';

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
    <Row gutter={[48,48]}>
      <Col span={24}>
        <h1 className="text-center p-3">Grundejerforeningen</h1>
      </Col>
      <Col span={12}>
        <h3>{text[number].header}</h3>
        <p>
          {text[number].text}
        </p>
      </Col>
      {raiseNumber()}
      <Col span={12}>
        <h3>{text[number].header}</h3>
        <p>
          {text[number].text}
        </p>
      </Col>
      {raiseNumber()}
      <Col span={12}>
        <h3>{text[number].header}</h3>
        <p>
          {text[number].text}
        </p>
      </Col>
      {raiseNumber()}
      <Col span={12}>
        <h3>{text[number].header}</h3>
        <p>
          {text[number].text}
        </p>
      </Col>
      <Col span={24}>
        <strong className="text-center"> {sideText[0].text}</strong>
          <button variant="outlined" className="m-3"> <Link to ="/ejerforeningerne"> {buttonText[0].text} </Link></button>
      </Col>
    </Row>

  );
  //#endregion
}

export default withRouter(Gf);
