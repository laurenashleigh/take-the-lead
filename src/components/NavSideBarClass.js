import React from 'react';
import { ListGroup } from 'react-bootstrap';

const NavSideBarDance = () => {
    return (
        <div className="side-nav">
            <ListGroup>
                <ListGroup.Item action active href="#calendar" >CLASS LIST</ListGroup.Item>
                <ListGroup.Item action href="#ballroom-beginner" >Ballroom & Latin Beginners</ListGroup.Item>
                <ListGroup.Item action href="#ballroom-level" >Ballroom & Latin Level 2/3</ListGroup.Item>
                <ListGroup.Item action href="#ballroom-kids" >Ballroom & Latin KIDS</ListGroup.Item>
                <ListGroup.Item action href="#sequence">Sequence</ListGroup.Item>
                <ListGroup.Item action href="#improvers">Improvers</ListGroup.Item>
                <ListGroup.Item action href="#medal">Medal Classes</ListGroup.Item>
                <ListGroup.Item action href="#workshops" >Workshops</ListGroup.Item>
                <ListGroup.Item action href="#private" >Private Lessons</ListGroup.Item>
                <ListGroup.Item action href="#dance-nights">Dance Nights</ListGroup.Item>
                <ListGroup.Item action href="#tea-dance">Tea Dances</ListGroup.Item>
                <ListGroup.Item action href="#dance-holidays">Dance Holidays</ListGroup.Item>
            </ListGroup>
        </div>
        
    )
}

export default NavSideBarDance;