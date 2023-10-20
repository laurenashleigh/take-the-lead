import {React, useState} from 'react';
import {Jumbotron, Row, Col, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com'



const ContactUs = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendForm = (e) => {
        e.preventDefault();

        

        emailjs.sendForm('service_0jzful4', 'template_sw7j4wd', e.target, 'user_bwDMlOBtHVgMcxnKo4V1E').then((result) => {
            console.log(result)
        }, (error) => {
            console.log(error)
        });
        document.getElementById("confirmation-message").textContent =`Thanks for your message! We'll get back to you as soon as we can.`
        setName('');
        setEmail('');
        setMessage('');
    }

    const handleSetMessage = (e) => {
        setMessage(e.target.value);
        document.getElementById("confirmation-message").textContent = ' ';
    }


    return (
        
            <Jumbotron className="contact-jumbotron" fluid>

                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <h1>Get in Touch!</h1>
                    </Col>
                    <Col md={4}></Col>
                </Row>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <p>For enquiries or bookings please contact fill out the form and we'll get back to you.</p>
                        <p><em>For booking requests, please specify the date and time of chosen class.</em></p>
                    </Col>
                    <Col md={3}></Col>
                </Row>
                <Form onSubmit={sendForm}>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={2}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name: </Form.Label>
                                <Form.Control name="from_name" type="text" value={name} onChange={e => setName(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Group>
                                <Form.Label>Email Address: </Form.Label>
                                <Form.Control name="from_email" type="text" value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label type="text" name="message">Message: </Form.Label>
                                <Form.Control name="message" as="textarea" value={message} onChange={e => handleSetMessage(e)}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                            <input className="send-message-button" type="submit" value="Send us a message"></input>
                            <p><em><strong><div id="confirmation-message"> </div></strong></em></p>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                </Form>                 
                
            </Jumbotron>
        
    )
   
}

export default ContactUs;