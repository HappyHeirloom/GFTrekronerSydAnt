import React from 'react'
import { Row, Col } from 'antd';
import Carousel from "../components/carousel"
import Newsfeed from '../components/newsfeed';

function FrontPage() {
    return (
        <Row gutter={[16, 16]}>
            <Col xl={16} sm={24}>
                <div className="carousel">
                    <Carousel/>
                </div>
            </Col>
            <Col xl={8} sm={24}>
                <div className="newsFeed center">
                    <Newsfeed/>
                </div>
            </Col>
        </Row>
    )
}

export default FrontPage
