import React from 'react';
import {Navbar, Nav, NavDropdown, Container, Image} from 'react-bootstrap';

const NavBar = () => {
    return (
        // <Container fluid>
            <Navbar bg="primary" variant="dark" expand="md">
                <Navbar.Brand href="#home">
                    <span>
                       <img
                            alt="Take The Lead"
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                            src="../images/Logo-No-Text.svg"
                        /> 
                    </span>
                    <span>
                        <img
                            alt="Take The Lead"
                            height="40"
                            className="d-inline-block align-top"
                            src="../images/Logo-Text.svg"
                        /> 
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                    <NavDropdown title="Classes" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Ballroom & Latin</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Fitsteps</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Children's Classes</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Private Lessons</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">Workshops</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.6">Dance Nights</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        //</Container>
    )
}

export default NavBar;