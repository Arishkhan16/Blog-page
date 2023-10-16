import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './banner.css';
import authorImg from '../../assets/img/avatar-img.webp';

const Banner = () => {
    return (
        <section className="bannerSec">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="banner-head">
                            <h1>Top Stories</h1>
                        </div>
                    </Col>

                    <Col lg={12}>
                        <div className="banner-img">
                            <h2><span><small>Technology</small></span>The Impact Of Technology on the Workplace: How Technology is Changing</h2>
                            <div className="banner-bottom">
                                <div className="banner-author-img">
                                    <img src={authorImg} alt=""/>
                                </div>
                                <div className="author-txt">
                                    <span>Tracey Wilson</span>
                                    <span>August 20, 2022</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;