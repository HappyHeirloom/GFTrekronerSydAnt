//#region Imports
import React from "react";
import Card from "../components/card";
import { managagementObjectList } from "../objects/managementObject";
import { withRouter } from "react-router-dom";
import "../styles/management.css";
import { Row, Col } from "antd";

//#endregion

function managementOverview() {
  // const style = { padding: "8px" };
  //#region HTML code
  return (
    <div className="" id="">
      {/* <Row className="row" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} xl={12} flex="1 0 25%" className="gutter-row" span={12}>
          <div style={style}>
            <div className="">
              <Card prop={managagementObjectList.managementObjects[0]}></Card>
            </div>
          </div>
        </Col>
        <Col xs={24} xl={12} flex="1 0 25%" className="gutter-row" span={12}>
          <div style={style}>
            <div>
              <Card prop={managagementObjectList.managementObjects[1]}></Card>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="row" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} xl={12} flex="1 0 25%" className="gutter-row" span={12}>
          <div style={style}>
            <div className="">
              <Card prop={managagementObjectList.managementObjects[2]}></Card>
            </div>
          </div>
        </Col>
        <Col xs={24} xl={12} flex="1 0 25%" className="gutter-row" span={12}>
          <div style={style}>
            <div>
              <Card prop={managagementObjectList.managementObjects[3]}></Card>
            </div>
          </div>
        </Col>
      </Row> */}

      <Row gutter={[24, 24]}>
        <Col span={12}>
          <Card prop={managagementObjectList.managementObjects[0]}></Card>
        </Col>
        <Col span={12}>
          <Card prop={managagementObjectList.managementObjects[1]}></Card>
        </Col>

        <Col span={12}>
          <Card prop={managagementObjectList.managementObjects[2]}></Card>
        </Col>
        <Col span={12}>
          <Card prop={managagementObjectList.managementObjects[3]}></Card>
        </Col>
      </Row>

    </div>
  );
  //#endregion
}

export default withRouter(managementOverview);

//#endregion
