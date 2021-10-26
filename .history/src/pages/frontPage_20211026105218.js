import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col } from 'antd';
import Carousel from "../components/carousel";
import NewsList from '../pages/newsList';

import "../styles/frontPage.css"

function FrontPage() {
    return (
        <div className="frontPageWrapper">
            <Row gutter={[16, 16]}>
                <Col xl={12} md={24} sm={24} xs={24}>
                    <div className="carousel">
                        <Carousel/>
                    </div>
                </Col>
                <Col xl={12} md={24} sm={24} xs={24}>
                    <div className="newsFeed center">
                        <NewsList/>
                    </div>
                </Col>
                <Col>
                    <div>
                        CVR: 33223420
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default withRouter(FrontPage);
