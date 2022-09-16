import React from 'react';
import NavSideBarDance from '../components/NavSideBarDance';
import {Container, Row, Col} from 'react-bootstrap';
import AboutDance from '../components/AboutDance';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <Container fluid >
                <Row>
                <Col lg={1}></Col>
                    <Col lg={10}>
                        <h1 className="classes-header">About Us</h1>
                        <div className="about-us-block">
                        <span >
                            <img 
                                src="../images/val-square.png"
                                alt="val kershaw"
                                className="about-us-image rounded"
                            />
                        </span>
                        <span className="about-us-text">
                            <h4>Val Kershaw</h4>  
                            <p>I am an Associate in Ballroom, Latin &amp; Argentine Tango with the IDTA.  I was born into a dancing family and so have danced for a very long time.  I started the dance school a number of years ago and have been delighted with the enthusiasm of all of you that have attended. My aim has always been to see people having fun and a great social experience through dance and music and I see just that from children through to the oldest of my dancers. Come along and join the fun!</p>
                        </span>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
                <Row>
                <Col lg={1}></Col>
                    <Col lg={10}>
                    <hr className="line-break"/>  
                    <h1 className="classes-header">Our Dances</h1>   
                    </Col>
                    <Col lg={1}></Col> 
                </Row>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={3}>
                        <NavSideBarDance />    
                    </Col>
                    <Col lg={7}><AboutDance /></Col>
                    <Col lg={1}></Col>
                </Row>
                <Row>

                </Row>
                <ScrollToTop />
            </Container>
            <Footer />
        </div>
    )
}
export default AboutUs;