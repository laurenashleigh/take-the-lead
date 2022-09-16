import React from 'react';
import Table from 'react-bootstrap/Table';
import {Container, Row, Col} from 'react-bootstrap';

const PriceAndBooking = () => {
    return (
    <div>
        <h1 className="pricing-header">Prices and Booking</h1>
        <hr />
        <h3>Prices</h3>
        <p>Classes are for 1hr - 90mins and must be booked and paid for in advance.</p>
        <Table bordered hover>
            <thead>
                <tr>
                    <th>Class</th>
                    <th>Price per session</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Adult classes</td>
                    <td>£6.50</td>
                </tr>
                <tr>
                    <td>Children's classes</td>
                    <td>£4.50 (payable half termly in advance)</td>
                </tr>
                <tr>
                    <td>Dance nights</td>
                    <td>price as advertised for the event</td>
                </tr>
                <tr>
                    <td>Fitsteps</td>
                    <td>£6.50</td>
                </tr>
                <tr>
                    <td>Medal Class</td>
                    <td>£6.50 (1hr) | £9 (90min)</td>
                </tr>
                <tr>
                    <td>Workshop (2hrs)</td>
                    <td>£15.00 (£25 per couple)</td>
                </tr>
                <tr>
                    <td>Workshop (3hrs)</td>
                    <td>£20.00 (£35 per couple)</td>
                </tr>
                <tr>
                    <td>Tea dance</td>
                    <td>price as advertised for the event</td>
                </tr>
                <tr>
                    <td>Private lesson</td>
                    <td>£37.00 per hour (£40 from 1st Nov 2022)</td>
                </tr>
                <tr>
                    <td>Music/ tuition for events</td>
                    <td>contact for a quote</td>
                </tr>
            </tbody>
        </Table>
        <hr />
        <h3>Booking</h3>
        <p>To book a class, choose a date and time using <a style={{color: '#25B8C6', textDecoration: 'underline'}} href="/classes#google-calendar">our calendar </a>then fill in <a style={{color: '#25B8C6', textDecoration: 'underline'}} href="/#contact-us">our contact form</a> to reserve a place</p>
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