import React from 'react';
import MediaFeed from '../components/MediaFeed';
import NavBar from '../components/NavBar';
import PhotoCarousel from '../components/PhotoCarousel';
import GoogleCalendar from '../components/GoogleCalendar'
import {Container, Row, Col, Image} from 'react-bootstrap'
import ContactUs from '../components/ContactUs';

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg={1} sm={0}></Col>
                <Col lg={10} sm={12}>
                    <PhotoCarousel />    
                </Col>
                <Col lg={1} sm={0}></Col>
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
                    <h2 className="text-lg-center">A bit about us</h2>
                </Col>
            </Row>
            <Row>
                <Col lg={1}></Col>
                <Col lg={3} className="text-center">
                    {/* <Image src="../images/take-the-lead-logo-big.svg" rounded/> */}
                    <Image src="../images/ttl-logo-recreated.svg" rounded/>
                </Col>
                <Col lg={6} className="text-justify">
                    
                    <p>A Ballroom and Latin dance school based in King's Lynn, offering classes and private lessons around West Norfolk. From beginner to advanced and Medals we can help you to learn the basics, brush up your technique, create wedding dance choreography or learn some new sequence dances.</p>
                    <p>We are now also offering Fitsteps Ballroom & Latin based dance exercise classes in Kings Lynn as well as Dancing Memories - chair based exercise and activity sessions for the residents of Care homes and small groups in Kings Lynn and the surrounding area.</p>
                </Col>
                
                
                
                <Col lg={2}></Col>
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