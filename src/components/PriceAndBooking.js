import React from 'react';
import Table from 'react-bootstrap/Table';
import {Container, Row, Col} from 'react-bootstrap';

const PriceAndBooking = () => {
    return (
    <div>
        <h1 className="pricing-header">Prices and Booking</h1>
        <hr />
        <h3>Prices</h3>
        <p>Classes are for 1hr - 90mins | payments can be made on the night using cash or card or by the purchase of a dance card</p>
        <Table bordered hover>
            <thead>
                <tr>
                    <th>Class</th>
                    <th>Price per session</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Adult 1hr classes</td>
                    <td><strong>£6.50</strong> <em>(From January 2024 -  Per person per night £7.50 single class | £13 for two classes | £18 for three classes)</em></td>
                </tr>
                <tr>
                    <td>Children's classes</td>
                    <td>Price as advertised in class timetable when classes are available</td>
                </tr>
                <tr>
                    <td>Dance nights</td>
                    <td>Price as advertised for the event</td>
                </tr>
                <tr>
                    <td>Improvers class (90min)</td>
                    <td><strong>£10</strong></td>
                </tr>
                <tr>
                    <td>Medal Class</td>
                    <td><strong>£6.50</strong>, 1hr | £9, 90min <em>(From January 2024 - £7.5, 1hr | £10, 90min)</em></td>
                </tr>
                <tr>
                    <td>Workshop (2hrs)</td>
                    <td><strong>£15</strong> | <strong>£25</strong> per couple <em>(From January 2024 - per person £18 | per couple £30)</em></td>
                </tr>
                <tr>
                    <td>Workshop (3hrs)</td>
                    <td><strong>£20</strong> | <strong>£35</strong> per couple <em>(From January 2024 - per person £25 | per couple £40)</em></td>
                </tr>
                <tr>
                    <td>Tea dance</td>
                    <td>price as advertised for the event</td>
                </tr>
                <tr>
                    <td>Private lesson (1hr)</td>
                    <td><strong>£40</strong> <em>(From January 2024 - £42)</em></td>
                </tr>
                <tr>
                    <td>Jive Class</td>
                    <td><strong>£6.50</strong>, 1hr | <strong>£10</strong>, 90min <em>(From January 2024 - £7.5, 1hr | £10, 90min)</em></td>
                </tr>
                <tr>
                    <td>Music/ tuition for events</td>
                    <td>contact for a quote</td>
                </tr>
            </tbody>
        </Table>
        <hr />
        <h3>Booking</h3>
        <p>To book a class, choose a date and time using <a style={{color: '#25B8C6', textDecoration: 'underline'}} href="/calendar#google-calendar">our calendar </a>then fill in <a style={{color: '#25B8C6', textDecoration: 'underline'}} href="/#contact-us">our contact form</a> to reserve a place</p>
    </div>
    )
}

const PriceAndBookingPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg={1} sm={0}></Col>
                <Col lg={10} sm={12}>
                    <PriceAndBooking />  
                </Col>
                <Col lg={1} sm={0}></Col>
            </Row>
        </Container>
    )
}

export default PriceAndBookingPage;