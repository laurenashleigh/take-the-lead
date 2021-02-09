import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

const ContactUs = () => {
    return (
         <Jumbotron className="contact-jumbotron" fluid>
            <h1>Get in Touch!</h1>
            <p>
            For enquiries or bookings please contact Val on: <strong>07789 957 071</strong> or email <strong>info@taketheleaddance.co.uk</strong>
            </p>
            <p>
                <a href="mailto:info@taketheleaddance.co.uk">Yup</a><Button variant="primary">Send us a message</Button>
            </p>
        </Jumbotron>
    )
   
}

export default ContactUs;