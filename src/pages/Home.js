import React from 'react';
import PhotoCarousel from '../components/PhotoCarousel';
import {Container, Row, Col, Image} from 'react-bootstrap';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
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

                        <h4>Classes</h4>
                        <p>Classes are offered in Dersingham, Kings Lynn and Upwell in a variety of Styles
                            including Ballroom, Latin, Argentine Tango and Jive/Lindyhop, Swing. Different
                            class locations may be added in the future
                        </p>
                        <h4>Private lessons</h4>
                        <p>These are available in Kings Lynn on Saturday mornings but may also be available
                            during the daytime on weekdays by arrangement and will be quoted for
                            individually based on location and venue.
                        </p>

                        <h4>Next Steps</h4>
                        <p>Check out the class or lesson types available and the timetable for all classes and locations. Then click on and complete the contact form and Val will be in touch to discuss your requirements and available places for whichever classes, workshops, events or private lessons you are interested in. Details will be given when availability is confirmed.</p>
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
        <Footer />
        </>
        
    )
}

export default Home;