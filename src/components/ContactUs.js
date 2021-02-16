import {React, useState} from 'react';
import {Jumbotron, Button, Container, Row, Col, Form } from 'react-bootstrap';




const ContactUs = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");



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
                    <Col md={4}></Col>
                    <Col md={4}>
                        <p>For enquiries or bookings please contact fill out the form and we'll get back to you.</p>
                    </Col>
                    <Col md={4}></Col>
                </Row>
                <Form>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={2}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name: </Form.Label>
                                <Form.Control type="text" value={name} onChange={e => setName(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Group>
                                <Form.Label>Email Address: </Form.Label>
                                <Form.Control type="text" value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label type="text" name="message">Message: </Form.Label>
                                <Form.Control as="textarea" value={message} onChange={e => setMessage(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={4}>
                            <input type="submit" value="Send us a message"></input>
                        </Col>
                        <Col md={4}></Col>
                        
                    </Row>
                
                </Form>                 
                
            </Jumbotron>
        
    )
   
}

export default ContactUs;