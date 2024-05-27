import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Home-Booking.css';

export default function HomeBooking({ BookedVenues }) {
    return (
        <div className='BookedContainer'>
            <div className='BookedV'>
            <Link 
            // to={`/Home/${BookedVenues.id}`} 
            key={BookedVenues}>
                <img src={BookedVenues.photo} alt="Venue Image"></img>
            </Link>

            <div className="BookedInfo">
                    <div className="container">
                        <Link className="venue-name" 
                        // to={`/Home/${BookedVenues.id}`}
                         key={BookedVenues}>{BookedVenues.name}</Link>
                        <p className="venue-location">{BookedVenues.location}</p>
                    </div>
            </div>
            </div>
        </div>
    )
}
