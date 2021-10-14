//#region Imports
import React from "react"
import { withRouter, Link } from "react-router-dom";
import changeLanguage from "../components/languageComponent";
import { privacyText } from "../objectText/privcayText";
import { Col, Row } from 'antd';

import 'animate.css';
//#endregion

function Gf() {
  var text = "";
  var sideText = "";
  var buttonText = "";
  var number = 0;
  if(changeLanguage() ? text = privacyText.privacyText_EN  : text = privacyText.privacyText_DK);  
  if(changeLanguage() ? sideText = MiscText.ButtonGFSideText_EN  : sideText = MiscText.ButtonGFSideText_DK);  
  if(changeLanguage() ? buttonText = MiscText.ButtonText_EN  : buttonText = MiscText.ButtonText_DK);  

  function raiseNumber(){
    number++;
  }

  //#region HTML code
  return (
    <Row gutter={[48,48]}>
      <Col span={24}>
        <h1 style={{fontSize: 24}} className="animate__animated animate__backInDown">Datahåndtering</h1>
      </Col>
    
    </Row>

  );
  //#endregion
}

export default withRouter(privacy);