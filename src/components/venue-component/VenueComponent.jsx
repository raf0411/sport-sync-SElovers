import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './VenueComponent.css';

export default function VenueComponent({ venue }) {
    return (
        <div className='venue-container'>
            <div className='venue'>
            <Link to={`/venues/${venue.id}`} key={venue}>
                <img src={venue.photo} alt="Venue Image"></img>
            </Link>

            <div className="venue-info">
                    <div className="container">
                        <Link className="venue-name" to={`/venue/${venue.id}`} key={venue}>{venue.name}</Link>
                        <p className="venue-location">{venue.location}</p>
                    </div>
            </div>
            </div>
        </div>
    )
}
