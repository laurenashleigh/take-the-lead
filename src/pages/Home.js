import React from 'react';
import MediaFeed from '../components/MediaFeed';
import NavBar from '../components/NavBar';
import PhotoCarousel from '../components/PhotoCarousel';

import {Container, Row, Col} from 'react-bootstrap'

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
                <MediaFeed />
            </Row>
            
    
        </Container>
        
    )
}

export default Home;