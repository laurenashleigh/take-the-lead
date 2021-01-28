import React from 'react';
import { Nav } from 'react-bootstrap';

const NavSideBar = () => {
    return (
        <div className="side-nav">
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Waltz</Nav.Link>
                <hr />
                <Nav.Link href="">Jive</Nav.Link>
                <hr />
                <Nav.Link href="">Quick Step</Nav.Link>
                <hr />
                <Nav.Link href="">Cha Cha</Nav.Link>
                <hr />
                <Nav.Link href="">Fox Trot</Nav.Link>
            </Nav>
        </div>
        
    )
}

export default NavSideBar;