import React from 'react';
import { ListGroup } from 'react-bootstrap';

const NavSideBarDance = () => {
    return (
        <div className="side-nav">
            <ListGroup>
                <ListGroup.Item action disabled active >BALLROOM</ListGroup.Item>
                <ListGroup.Item action href="#waltz" >Waltz (slow)</ListGroup.Item>
                <ListGroup.Item action href="#viennese-waltz" >Viennese Waltz</ListGroup.Item>
                <ListGroup.Item action href="#quick-step">Quick Step</ListGroup.Item>
                <ListGroup.Item action href="#tango">Tango</ListGroup.Item>
                <ListGroup.Item action href="#foxtrot">Fox Trot</ListGroup.Item>
                <ListGroup.Item action disabled active >LATIN</ListGroup.Item>
                <ListGroup.Item action href="#rumba" >Rumba</ListGroup.Item>
                <ListGroup.Item action href="#chachacha" >Cha Cha Cha</ListGroup.Item>
                <ListGroup.Item action href="#jive">Jive</ListGroup.Item>
                <ListGroup.Item action href="#samba">Samba</ListGroup.Item>
                <ListGroup.Item action href="#paso-doble">Paso Doble</ListGroup.Item>
                <ListGroup.Item action href="#argentine-tango">Argentine Tango</ListGroup.Item>
                <ListGroup.Item action href="#lindyhop">Lindyhop</ListGroup.Item>
            </ListGroup>
        </div>
        
    )
}

export default NavSideBarDance;