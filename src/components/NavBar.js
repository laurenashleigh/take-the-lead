import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Container fluid>
            <Navbar bg="primary" variant="dark" expand="md">
                <Navbar.Brand href="#home">
                    <img
                        alt="Take The Lead"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        src="../images/Logo-No-Text.svg"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
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