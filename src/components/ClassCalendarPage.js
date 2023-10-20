import GoogleCalendar from './GoogleCalendar';
import {Container, Row, Col} from 'react-bootstrap';

const ClassCalendarPage = () => {
    return (
        <Container fluid>
            <Row>
                    <Col lg={1}></Col>
                        <Col lg={10}>
                            <h1 className="classes-header">Class Timetable</h1>  
                        </Col>
                    <Col lg={1}></Col> 
                </Row>
             <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                    <hr className="line-break"/>
                    <p>Book a class by choosing the event in our calendar then filling in <a style={{color: '#25B8C6', textDecoration: 'underline'}} href="/#contact-us">our contact form</a> to reserve a place. <br/>Or simply have a browse...</p>
                    <GoogleCalendar id="google-calendar"/>   
                    </Col>
                    <Col lg={1}></Col> 
                </Row>
        </Container>
    )
}

export default ClassCalendarPage;