import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
    return (
        <Container>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt="Take The Lead"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        src="src/images/logo.png"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                    <NavDropdown title="Classes" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Ballroom & Latin</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Fitsteps</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Private Classes</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Social Events</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </Container>
    )
}

export default NavBar;