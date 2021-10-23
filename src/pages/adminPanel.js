import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { Col, Row } from 'antd';

import "../styles/adminPanel.css";

function AdminPanel() {
    return (
        <div>
            <div className="adminWrapper">
                <div className="adminContainer"> 
                    <h1 className="adminHeader"> Admin dashboard </h1>
                    <Row className="adminRowTop" gutter={[16,16]}>
                        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                            <Link to="/adminnewsfeed"> <button className="button-36"> See news </button> </Link>
                        </Col>

                        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                            <Link to="/createNews"> <button className="button-36"> Add news </button> </Link>
                        </Col>
                    </Row>
                    <Row className="adminRowBot" gutter={[16,16]}>
                        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                            <Link to="/admineventfeed"> <button className="button-36"> See events </button> </Link>
                        </Col>

                        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                            <Link to="/createevent"> <button className="button-36"> Add Event </button> </Link>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default withRouter(AdminPanel)
