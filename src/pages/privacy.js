//#region Imports
import React from "react"
import { withRouter} from "react-router-dom";
import changeLanguage from "../components/languageComponent";
import { privacyText } from "../objectText/privacyText";
import { Col, Row } from 'antd';

import 'animate.css';
import '../styles/privacy.css'
//#endregion

function privacy() {
  var text = "";
  var number = 0;
  if(changeLanguage() ? text = privacyText.privacyText_EN  : text = privacyText.privacyText_DK);  

  function raiseNumber(){
    number++;
  }

  //#region HTML code
  return (
    <Row className="button-padding" gutter={[48,48]}>
      <Col span={24}>
        <h1 style={{fontSize: 24}} className="animate__animated animate__backInDown">{text[number].header}</h1>
      </Col>
      {raiseNumber()}
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
      {raiseNumber()}
      <Col xs={24} xl={12} className="animate__animated animate__backInRight animate__slower">
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
    
    </Row>

  );
  //#endregion
}

export default withRouter(privacy);