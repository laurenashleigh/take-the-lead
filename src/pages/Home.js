import React from 'react';
import MediaFeed from '../components/MediaFeed';
import NavBar from '../components/NavBar';
import PhotoCarousel from '../components/PhotoCarousel';
import GoogleCalendar from '../components/GoogleCalendar'
import {Container, Row, Col} from 'react-bootstrap'
import ContactUs from '../components/ContactUs';

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg={1}></Col>
                <Col lg={10}>
                    <PhotoCarousel />    
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
                <Col sm={12}>
                    <h2 className="text-lg-center">Class Timetable & Booking</h2>
                </Col>
            </Row>
            <Row>
                <Col lg={1}></Col>
                <Col lg={8}>
                    <GoogleCalendar/>
                </Col>
                <Col lg={2}>
                    <MediaFeed />
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
            <Row id="contact-us">
                <Col lg={1}></Col>
                <Col lg={10}>
                    <ContactUs />   
                </Col>
                <Col lg={1}></Col>
            </Row>
        </Container>
        
    )
}

export default Home;