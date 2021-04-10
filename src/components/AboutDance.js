import React from 'react';
import {Container, Row} from 'react-bootstrap';

const AboutDance = () => {
    return (
        <Container fluid>
            <h2>BALLROOM</h2>
            <br />  
            <Row id="waltz">
                <h4 className="class-title">Waltz (slow waltz)</h4>
                <p className="class-description">Elegant and flowing, this lovely dance is danced around the room in a closed hold in an anti-clockwise direction.  It is slow and graceful and often used for wedding dances. It was also thought a disgraceful dance when first introduced due the closeness of the partners!</p>
            </Row>
            <hr className="line-break"/>  
            <Row id="viennese-waltz">
                <h4 className="class-title">Viennese Waltz</h4>
                <p className="class-description">The original type of waltz which is danced in a circular fashion to music twice the speed of the slow waltz (we don’t dance that fast). It has very few steps however these have to be mastered well in order to maintain the beautiful flow of the dance around the floor</p>
            </Row>
            <hr className="line-break"/>  
            <Row id="quick-step">
                <h4 className="class-title">Quick Step</h4>
                <p className="class-description">Lively and light and fast, as the name suggests, this is a fun dance right from the beginner steps through to the trickier ones
The upbeat melodies that quickstep is danced to make it suitable for both formal and informal events. Quickstep was developed in the 1920s in New York City. Its origins are in combination of slow foxtrot combined with the Charleston, a dance which was one of the precursors to what today is called swing dancing.
</p>
            </Row>
            <hr className="line-break"/>  
            <Row id="tango">
                <h4 className="class-title">Tango</h4>
                <p className="class-description">Full of character and sharp staccato movements, this dance is was developed from its Argentinian origins into an internationally recognised standard for Ballroom.  Its dramatic and strong and fully of mood.</p>
            </Row>
            <hr className="line-break"/>  
            <Row id="foxtrot">
                <h4 className="class-title">FoxTrot</h4>
                <p className="class-description">This dance is a smooth and progressive dance characterised by a continuous flowing movement around the dance floor.  It is most often danced to big band music. Developed in the early 1900’s it remains popular today.</p>
            </Row>
            <hr className="line-break"/>
            <h2>LATIN</h2>
            <br /> 
            <Row id="rumba">
                <h4 className="class-title">Rumba</h4>
                <p classname="class-description">The slowest of the Latin dances, it is sensual and rhythmical with the man showing off his partner through the movements of the dance. A lovely dance to learn the basics of due to the gentle nature, however the key is mastering the timing.</p>
            </Row>
            <hr className="line-break"/> 
            <Row id="chachacha">
                <h4 className="class-title">Cha Cha Cha</h4>
                <p classname="class-description">With many similarities to the Rumba, the main difference is the timing.  This is a fun and cheeky dance with lots of energy and danced to really upbeat music.  There are many dance tracks that can be used for a Cha Cha Cha.</p>
            </Row>
            <hr className="line-break"/>  
            <Row id="jive">
                <h4 className="class-title">Jive</h4>
                <p classname="class-description">There are several styles of Jive including Ballroom Jive, Rock n Roll, Lindy Hop. They have different characteristics and timings and are danced to different styles and eras of music but they are all great fun, upbeat and full of energy. We teach several styles.</p>
            </Row>
            <hr className="line-break"/>  
            <Row id="samba">
                <h4 className="class-title">Samba</h4>
                <p classname="class-description">A true carnival feeling dance and the music has a real party flavour.  The upper body remains relatively still with most of the movement happening from the waist down with the arms and hands responding to the hip and leg movements.</p>
            </Row>
            <hr className="line-break"/>  
            <Row id="paso-doble">
                <h4 className="class-title">Paso Doble</h4>
                <p classname="class-description">Originating in Spain and developed in France, this is a dramatic dance with a definite flavour of Flamenco. The music has ever changing rhythms and tells a story through sharp staccato movements and dramatic poses.</p>
            </Row>
            <hr className="line-break"/> 
            <Row id="argentine-tango">
                <h4 className="class-title">Argentine Tango</h4>
                <p classname="class-description">A dance that has different styles using a variety of music.  It is all about musical interpretation and the giving and receiving of control between the partners.  Connection is the key and this is an amazing dance to learn the art of working together. A very sensual and powerful dance.</p>
            </Row>
            <hr className="line-break"/>  
            <Row id="lindyhop">
                <h4 className="class-title">Lindyhop</h4>
                <p classname="class-description">The original dance from which Jive and Swing styles were developed.  It includes 6 and 8 count moves and Charleston steps to make a fun and versatile dance with so many variations.  Lots of opportunities for both partners to add individual style to their steps whilst maintaining a great connection and partnership.</p>
            </Row>
            <hr className="line-break"/>  
        </Container>
    )
}

export default AboutDance;