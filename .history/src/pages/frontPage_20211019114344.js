import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col } from 'antd';
import Carousel from "../components/carousel";
import NewsList from '../components/newsList';

function FrontPage() {
    return (
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
        </Row>
    )
}

export default withRouter(FrontPage);
