//#region Imports
import React from "react";
import Card from "../components/card";
import { efObjectList } from "../objects/efObjects";
import { withRouter } from "react-router-dom";
import { Row, Col } from "antd";
import "../styles/ef.css";
import changeLanguage from "../components/lang";

//#endregion

function efOverview() {
  //#region HTML code

  const style = { padding: "20px" };

  return (
    <div id="Main">
      <Row className="row" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} xl={12} flex="1 0 25%" className="gutter-row" span={12}>
          <div style={style}>
            <div className="">
              <a target="_blank" rel="noreferrer" href="http://ahornlunden.dk">
                <Card prop={efObjectList.efObjects[0]}></Card>
              </a>
            </div>
          </div>
        </Col>
        <Col xs={24} xl={12} flex="1 0 25%" className="gutter-row" span={12}>
          <div style={style}>
            <div>
              <Card prop={efObjectList.efObjects[1]}></Card>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="row" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} xl={12} flex="1 0 25%" className="gutter-row" span={12}>
          <div style={style}>
            <div>
              <Card prop={efObjectList.efObjects[2]}></Card>
            </div>
          </div>
        </Col>
        <Col xs={24} xl={12} flex="1 0 25%" className="gutter-row" span={12}>
          <div style={style}>
            <div>
              <Card prop={efObjectList.efObjects[3]}></Card>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="row" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} xl={12} flex="1 0 25%" className="gutter-row" span={12}>
          <div style={style}>
            <div className="">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://akf-holding.dk/udviklingsprojekter/akacielunden-1-7-4000-roskilde/"
              >
                <Card prop={efObjectList.efObjects[4]}></Card>
              </a>
            </div>
          </div>
        </Col>
        <Col xs={24} xl={12} flex="1 0 25%" className="gutter-row" span={12}>
          <div style={style}>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="http://www.poppellunden.dk/"
              >
                <Card prop={efObjectList.efObjects[5]}></Card>
              </a>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="row" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} xl={12} flex="1 0 25%" className="gutter-row" span={12}>
          <div style={style}>
            <div className="">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://propstep.com/da/property/paerelunden/"
              >
                <Card prop={efObjectList.efObjects[6]}></Card>
              </a>
            </div>
          </div>
        </Col>
        <Col xs={24} xl={12} flex="1 0 25%" className="gutter-row" span={12}>
          <div style={style}>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://trekronerbutikscenter.dk"
              >
                <Card prop={efObjectList.efObjects[7]}></Card>
              </a>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="row" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} xl={12} flex="1 0 25%" className="gutter-row" span={12}>
          <div style={style}>
            <div className="">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://trekronerbutikscenter.dk"
              >
                <Card prop={efObjectList.efObjects[8]}></Card>
              </a>
            </div>
          </div>
        </Col>
        <Col xs={24} xl={12} flex="1 0 25%" className="gutter-row" span={12}>
          <div style={style}>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://trekronerbutikscenter.dk"
              >
                <Card prop={efObjectList.efObjects[9]}></Card>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
  //#endregion
}

export default withRouter(efOverview);
