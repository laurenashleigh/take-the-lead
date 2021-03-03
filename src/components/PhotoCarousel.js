import React from 'react';
import { Carousel} from 'react-bootstrap';

const PhotoCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src='../images/lindy 5 resized.jpg'
                alt="First slide"
                />
                <Carousel.Caption>
                <h4>We offer classes and private lessons around West Norfolk.</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../images/rumba 1.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h4>From Beginner to Advanced and Medals.</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../images/rumba 6 resized.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h4>We can help you to learn the basics, perfect your technique or choreograph a wedding dance.</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default PhotoCarousel;