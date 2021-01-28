import React from 'react';
import { Nav } from 'react-bootstrap';

const NavSideBar = () => {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Waltz</Nav.Link>
            <Nav.Link href="">Jive</Nav.Link>
            <Nav.Link href="">Quick Step</Nav.Link>
            <Nav.Link href="">Cha Cha</Nav.Link>
            <Nav.Link href="">Fox Trot</Nav.Link>
        </Nav>
    )
}

export default NavSideBar;