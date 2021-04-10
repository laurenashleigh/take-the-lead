import React from 'react';
import NavSideBarClass from './NavSideBarClass';
import {Container, Row, Col} from 'react-bootstrap';
import AboutClass from '../components/AboutClass';
import Footer from '../components/Footer';
import GoogleCalendar from './GoogleCalendar';

const ClassPage = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                <Col lg={1}></Col>
                    <Col lg={10}>
                    <h1 className="classes-header">Classes We Offer</h1>  
                    </Col>
                    <Col lg={1}></Col> 
                </Row>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                    <hr className="line-break"/> 
                    <p>Book a class by clicking the event in the calendar and ... <br/>Or simply have a browse...</p>
                    <GoogleCalendar id="google-calendar"/>   
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
                        <NavSideBarClass />    
                    </Col>
                    <Col lg={7}><AboutClass /></Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
export default ClassPage;