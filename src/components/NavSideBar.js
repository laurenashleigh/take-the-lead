import React from 'react';
import { ListGroup } from 'react-bootstrap';

const NavSideBar = () => {
    return (
        <div className="side-nav">
            <ListGroup>
                <ListGroup.Item action href="" >Waltz</ListGroup.Item>
                <ListGroup.Item action href="" >Jive</ListGroup.Item>
                <ListGroup.Item action href="">Quick Step</ListGroup.Item>
                <ListGroup.Item action href="">Cha Cha</ListGroup.Item>
                <ListGroup.Item action href="">Fox Trot</ListGroup.Item>
            </ListGroup>
        </div>
        
    )
}

export default NavSideBar;