import React from 'react';
import { withRouter } from 'react-router';
import { Row, Col } from 'antd';
import Carousel from "../components/carousel";
import NewsList from '../components/tests/newsList';
// import {forsideText} from '../components/objectText/forsideText';
// import changeLanguage from '../components/languageComponent';

// var text = "";
// var number = 0;

// if(changeLanguage() ? text = forsideText.forsideText_EN : text = forsideText.forsideText_DK);

function FrontPage() {
    return (
        <Row gutter={[16, 16]}>
            <Col xl={12} md={12} sm={24}>
                <div className="carousel">
                    <Carousel/>
                </div>
            </Col>
            <Col xl={12} md={12} sm={24}>
                <div className="newsFeed center">
                    <NewsList/>
                </div>
            </Col>
        </Row>
    )
}

export default withRouter(FrontPage);
