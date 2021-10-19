//#region Imports
import React from "react"
import { withRouter} from "react-router-dom";
import changeLanguage from "../components/languageComponent";
import {gfText} from '../objectText/gfText';
import {MiscText} from '../objectText/miscText';
import { Col, Row, Image } from 'antd';
import sitePlanTrekroner from '../images/sitePlanTrekroner.jpg'


import 'animate.css';
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
        <h1 style={{fontSize: 24}} className="animate__animated animate__backInDown">Grundejerforeningen</h1>
      </Col>
      <Col xs={24} xl={12} className="animate__animated animate__backInLeft animate__faster">
        <h3>{text[number].header}</h3>
        <p>
          {text[number].text}
        </p>
      </Col>
      {raiseNumber()}
      <Col xs={24} xl={12} className="animate__animated animate__backInRight animate__fast">
        <h3>{text[number].header}</h3>
        <p>
          {text[number].text}
        </p>
      </Col>
      {raiseNumber()}
      <Col xs={24} xl={12} className="animate__animated animate__backInLeft animate__slow">
        <h3>{text[number].header}</h3>
        <p>
          {text[number].text}
        </p>
      </Col>
      {raiseNumber()}
      <Col xs={24} xl={12} className="animate__animated animate__backInRight animate__slower">
        <h3>{text[number].header}</h3>
        <p>
          {text[number].text}
        </p>
      </Col>
      <Col xl={24} md={24} sm={24} xs={0}> 
      <Image src={sitePlanTrekroner} alt="" style={{justifyContent: 'center', alignItems: 'center'}}></Image>
      </Col> 
    </Row>

  );
  //#endregion
}

export default withRouter(Gf);
