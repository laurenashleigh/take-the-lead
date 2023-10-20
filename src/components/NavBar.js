import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const NavBar = () => {
    return (
        // <Container fluid>
            <Navbar bg="primary" variant="dark" expand="md">
                <Navbar.Brand href="/">
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
                    <NavDropdown title="About" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/about">About us and our dances</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Classes" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/classes">Class list</NavDropdown.Item>
                        <NavDropdown.Item href="/calendar">Class timetable</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/booking">Prices and Booking</Nav.Link>
                    <Nav.Link href="/#contact-us">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        //</Container>
    )
}

export default NavBar;