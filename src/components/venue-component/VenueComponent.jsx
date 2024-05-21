import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './VenueComponent.css';

export default function VenueComponent({ venue }) {
    return (
        <div className='venue-container'>
            <div className='venue'>
            <Link to={`/venue/${venue.id}`} key={venue}>
                <img src={venue.photo} alt="Venue Image" />
            </Link>

            <div className="venue-info">
                    <div className="container">
                        <Link className="venue-name" to={`/venue/${venue.id}`} key={venue}>{venue.name}</Link>
                        <p className="venue-size">{venue.size}</p>
                    </div>
            </div>
            <p>hehehe</p>
            </div>
        </div>
    )
}
