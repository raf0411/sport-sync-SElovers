import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './HomeRooms.css';

export default function HomeRooms({ Rooms }) {
    return (
        <div className='RoomContainer'>
            <div className='RoomV'>
            <Link 
            // to={`/Home/${BookedVenues.id}`} 
            key={Rooms}>
                {/* <img src={.photo} alt="Venue Image"></img> */
                <iframe src={Rooms.map} className='RoomMap' ></iframe>
                }
            </Link>

            <div className="RoomInfo">
                    <div className="container">
                        <Link className="Room-name" 
                        // to={`/Home/${BookedVenues.id}`}
                         key={Rooms}>{Rooms.name}</Link>
                         <p className='MembersAmt'>Members: {Rooms.memberCount}/{Rooms.maxMembers}</p>
                         <p className='MemberList'>{Rooms.Members.join(', ')}</p>
                         <br></br>
                         <p className='RoomDes'>{Rooms.RoomDescription}</p>
                         <p className='RoomDetails'>{Rooms.Details}<br></br>{Rooms.time}</p>
                    </div>
            </div>
            </div>
        </div>
    )
}
