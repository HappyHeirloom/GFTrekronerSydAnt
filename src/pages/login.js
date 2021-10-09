import React from 'react'
import { withRouter } from 'react-router';
import AdminLogin from '../components/adminLogin';
import { Row, Col } from "antd";

import '../styles/login.css';

function Login() {
    return (
        <div className="background">
            <Row gutter={[16,16]}>
                <Col xl={8} lg={8} md={6} sm={4} xs={2} />
                <Col xl={8} lg={8} md={12} sm={16} xs={20} >
                    <div className="loginWrapper">
                        <div className="loginContainer">
                            <AdminLogin/>
                        </div>
                    </div>
                </Col>
                <Col xl={8} lg={8} md={6} sm={4} xs={2} />
            </Row>
        </div>
    )
}

export default withRouter(Login);
