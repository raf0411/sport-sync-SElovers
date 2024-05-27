import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Home-Rooms.css';

export default function HomeRooms({ Rooms }) {
    return (
        <div className='RoomContainer'>
            <div className='RoomV'>
            <Link 
            // to={`/Home/${BookedVenues.id}`} 
            key={Rooms}>
                {/* <img src={.photo} alt="Venue Image"></img> */
                }
            </Link>

            <div className="RoomInfo">
                    <div className="container">
                        <Link className="Room-name" 
                        // to={`/Home/${BookedVenues.id}`}
                         key={Rooms}>{Rooms.name}</Link>
                        <p className="venue-location">{Rooms.location}</p>
                    </div>
            </div>
            </div>
        </div>
    )
}
