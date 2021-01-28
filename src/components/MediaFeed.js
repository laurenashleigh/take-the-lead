import React from 'react';
import { Toast } from 'react-bootstrap';

const MediaFeed = () => {
    return (
        <div className="media-feed">
            <Toast>
                <Toast.Header>
                <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                />
                <strong className="mr-auto">Facebook</strong>
                <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, this is a Facebook post!</Toast.Body>
            </Toast>
            <Toast>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                    />
                    <strong className="mr-auto">Facebook</strong>
                    <small>19 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, this is a Facebook post!</Toast.Body>
            </Toast>
            <Toast>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                    />
                    <strong className="mr-auto">Instagram</strong>
                    <small>3 days ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, this is an Instagram post!</Toast.Body>
            </Toast>
        </div>
        
    )
}

export default MediaFeed;