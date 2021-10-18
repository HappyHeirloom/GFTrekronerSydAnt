//#region Imports
import React from "react";
import Card from "../components/card";
import { managagementObjectList } from "../objects/managementObject";
import { withRouter } from "react-router-dom";
import "../styles/management.css";
import { Row, Col } from "antd";
import changeLanguage from "../components/languageComponent";
import {managementText} from '../objectText/managementText';

//#endregion

function managementOverview() {
  // const style = { padding: "8px" };
  //#region HTML code
  var text = "";
  if(changeLanguage() ? text = managementText.managementText_EN  : text = managementText.managementText_DK);  
  return (
    <div className="box">
      <h2>
        {text[0].header}
      </h2>
      <p>
        {text[0].text}
      </p>
      <Row>
      <div className="cardtransform">
        <Col xs={24} xl={12}>
          <Card prop={managagementObjectList.managementObjects[0]}></Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card prop={managagementObjectList.managementObjects[1]}></Card>
        </Col>

        <Col xs={24} xl={12}>
          <Card prop={managagementObjectList.managementObjects[2]}></Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card prop={managagementObjectList.managementObjects[3]}></Card>
        </Col>
        </div>
      </Row>

    </div>
  );
  //#endregion
}

export default withRouter(managementOverview);

//#endregion
