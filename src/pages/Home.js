import React from 'react';
import PhotoCarousel from '../components/PhotoCarousel';
import {Container, Row, Col, Image} from 'react-bootstrap';
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
                <Col lg={4}></Col>
                <Col sm={7} className="text-center">
                    <h1 className="text-lg-center">A bit about us</h1>
                </Col>
                <Col lg={1}></Col>
            </Row>
            <Row>
                <Col lg={1}></Col>
                <Col lg={3} className="text-center">
                    {/* <Image src="../images/take-the-lead-logo-big.svg" rounded/> */}
                    <Image className="logo-home" src="../images/logo2.jpeg" rounded/>
                </Col>
                <Col lg={7} className="text-center">
                    <div className="about-us-description">
                        <p>Fancy learning some Cheeky Cha Cha Cha, a Jumping Jive, a smooth Slow Foxtrot or whirling around the floor for a Waltz, then come along and join a class or have a private lesson with Val at one of our locations in Norfolk or Cambridgeshire and you’ll soon be dancing around the room alongside lots of other like-minded people.</p>
                        <p>Whether you’re Beginners, Improvers, want to polish up your moves, learn to be a teacher yourself or create a truly memorable dance for your wedding or special occasion, come and take your first steps with us.</p>
                        <p>We can take you from your very first steps to increasing your knowledge, gaining recognition through taking medals and on to teaching qualifications. The journey is yours and you choose how far you want to go.</p>

                        <h4>Online or in the Studio</h4>
                        <p>Classes are offered in Dersingham, Kings Lynn and Upwell with Private lessons also available in Kings Lynn.  Different locations may be added in the future</p>
                        <p>Classes and Workshops can be conducted via ZOOM, or in the Studio when lockdown restrictions are lifted, using COVID secure measures and ensuring compliance with government social distancing guidelines.</p>
                        <p>Private Dance Lessons can be conducted safely via ZOOM or when COVID-19 restrictions allow, in the studio in person for couples and small groups from the same household/bubble.</p>
                        <p>Due to the constantly changing situation, Val reserves the right to reschedule lessons and classes and your understanding and flexibility is appreciated.</p>

                        <h4>Next Steps</h4>
                        <p>Check out the class or lesson types available and the timetable for all classes and locations. Then click on and complete the contact form and Val will be in touch to discuss your requirements and available places for whichever classes, workshops, events or private lessons you are interested in. Payment is via Paypal or via bank transfer.  Details will be given when availability is confirmed.</p>
                        <p>The timetable also lists monthly Dance nights, Workshops and other events when available.</p>
                    </div>
                    
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