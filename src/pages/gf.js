//#region Imports
import React from "react"
import { withRouter} from "react-router-dom";
import changeLanguage from "../components/languageComponent";
import {gfText} from '../objectText/gfText';
import { Col, Row, Image } from 'antd';
import sitePlanTrekroner from '../images/sitePlanTrekroner.jpg'

import "../styles/gf.css";
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
    <div className="gfWrapper">
      <Row gutter={[48,48]}>
        <Col span={24}>
          <h1 style={{fontSize: 24}} className="">Grundejerforeningen</h1>
        </Col>
        <Col xs={24} xl={12} className="">
          <h3>{text[number].header}</h3>
          <p>
            {text[number].text}
          </p>
        </Col>
        {raiseNumber()}
        <Col xs={24} xl={12} className="">
          <h3>{text[number].header}</h3>
          <p>
            {text[number].text}
          </p>
        </Col>
        {raiseNumber()}
        <Col xs={24} xl={12} className="">
          <h3>{text[number].header}</h3>
          <p>
            {text[number].text}
          </p>
        </Col>
        {raiseNumber()}
        <Col xs={24} xl={12} className="">
          <h3>{text[number].header}</h3>
          <p>
            {text[number].text}
          </p>
        </Col>
        <Col xl={24} md={24} sm={24} xs={0}> 
        <Image src={sitePlanTrekroner} alt="" style={{justifyContent: 'center', alignItems: 'center'}}></Image>
        </Col> 
      </Row>
    </div>

  );
  //#endregion
}

export default withRouter(Gf);
