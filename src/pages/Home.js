import React from 'react';
import MediaFeed from '../components/MediaFeed';
import NavBar from '../components/NavBar';
import PhotoCarousel from '../components/PhotoCarousel';

const Home = () => {
    return (
        <div>
            <NavBar />
            <PhotoCarousel />
            <MediaFeed />
        </div>
        
    )
}

export default Home;