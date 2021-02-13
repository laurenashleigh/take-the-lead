import React from 'react';
import NavSideBar from '../components/NavSideBar';
import {Container, Row, Col} from 'react-bootstrap';
import AboutClass from '../components/AboutClass';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                <Col lg={1}></Col>
                    <Col lg={10}>
                        <h2>About Us</h2> 
                        <h4>PLACEHOLDER</h4>  
                        <p>Insert picture of Val's face here</p>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
                <Row>
                <Col lg={1}></Col>
                    <Col lg={10}>
                    <hr className="line-break"/>    
                    </Col>
                    <Col lg={1}></Col> 
                </Row>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={3}>
                        <NavSideBar />    
                    </Col>
                    <Col lg={7}><AboutClass /></Col>
                    <Col lg={1}></Col>
                </Row>
                <Row>

                </Row>
            </Container>
            <Footer />
        </div>
    )
}
export default AboutUs;