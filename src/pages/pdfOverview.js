//#region Import
import React from 'react'
import Card from '../components/card';
import {pdfObjectList} from '../objects/pdfObjects';
import { withRouter, Link } from "react-router-dom";
import { Row, Col } from 'antd';

//#endregion

function pdfOverview() {
    //#region HTML code
    return ( 
        <div>
            <Row gutter={[48, 48]}>
                <Col xs={24} xl={12}>
                    <Link to="/doc/parkering">
                        <Card prop={pdfObjectList.pdfObjects[0]}></Card>
                    </Link>
                </Col>
                <Col xs={24} xl={12}>
                    <Link to="/doc/reglement">
                        <Card prop={pdfObjectList.pdfObjects[1]}></Card>
                    </Link>
                </Col>
                <Col xs={24} xl={12}>
                    <Link to="/doc/plejebeskrivelse">
                        <Card prop={pdfObjectList.pdfObjects[2]}></Card>
                    </Link>
                </Col>
                <Col xs={24} xl={12}>
                    <Link to="/doc/resume">
                        <Card prop={pdfObjectList.pdfObjects[3]}></Card>
                    </Link>
                </Col>
                <Col xs={24} xl={12}>
                    <Link to="/doc/vedtægter">
                       <Card prop={pdfObjectList.pdfObjects[4]}></Card>
                    </Link>
                </Col>
                <Col xs={24} xl={12}>
                    <Link to="/doc/budget">
                        <Card prop={pdfObjectList.pdfObjects[5]}></Card>
                    </Link>
                </Col>
                <Col span={24}>
                    <Link to="/doc/udbudsmateriale">
                        <Card prop={pdfObjectList.pdfObjects[6]}></Card>
                    </Link>  
                </Col>
            </Row>
        </div>
     );
     //#endregion
}

export default withRouter(pdfOverview);