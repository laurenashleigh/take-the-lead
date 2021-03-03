import React from 'react';
import { ListGroup } from 'react-bootstrap';

const NavSideBarDance = () => {
    return (
        <div className="side-nav">
            <ListGroup>
                <ListGroup.Item action href="#ballroom" >Ballroom & Latin</ListGroup.Item>
                <ListGroup.Item action href="#ballroom-kids" >Ballroom & Latin KIDS</ListGroup.Item>
                <ListGroup.Item action href="#fitsteps">Fitsteps</ListGroup.Item>
                <ListGroup.Item action href="#sequence">Sequence</ListGroup.Item>
                <ListGroup.Item action href="#social">Social Events</ListGroup.Item>
            </ListGroup>
        </div>
        
    )
}

export default NavSideBarDance;