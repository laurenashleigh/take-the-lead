import React from 'react';
import { ListGroup } from 'react-bootstrap';

const NavSideBarDance = () => {
    return (
        <div className="side-nav">
            <ListGroup>
                <ListGroup.Item action href="#waltz" >Waltz</ListGroup.Item>
                <ListGroup.Item action href="#jive" >Jive</ListGroup.Item>
                <ListGroup.Item action href="#quick-step">Quick Step</ListGroup.Item>
                <ListGroup.Item action href="#cha-cha">Cha Cha</ListGroup.Item>
                <ListGroup.Item action href="#foxtrot">Fox Trot</ListGroup.Item>
            </ListGroup>
        </div>
        
    )
}

export default NavSideBarDance;