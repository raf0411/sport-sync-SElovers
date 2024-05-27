import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './HomeActivity.css';

export default function HomeActivity({ Activity }) {

    const [isJoined, setIsJoined] = useState(false);

    const handleIsJoined = () => {
        setIsJoined(!isJoined);
    }

    return (
        <div className='ActivityC'>
            <div className='RoomV'>
            <Link 
            // to={`/Home/${BookedVenues.id}`} 
            key={Activity}>
                {/* <img src={.photo} alt="Venue Image"></img> */
                <iframe src={Activity.map} className='RoomMap' ></iframe>
                }
            </Link>

            <div className="RoomInfo">
                    <div className="container">
                        <Link className="Room-name" 
                        // to={`/Home/${BookedVenues.id}`}
                         key={Activity}>{Activity.name}</Link>
                         <p className='MembersAmt'>Members: {Activity.memberCount}/{Activity.maxMembers}</p>
                         <p className='MemberList'>{Activity.Members.join(', ')}</p>
                         <br></br>
                         <p className='RoomDes'>{Activity.RoomDescription}</p>
                         <p className='RoomDetails'>{Activity.Details}<br></br>{Activity.time}</p>
                    </div>
                    <br />
                    <button className="join-btn" onClick={handleIsJoined}>
                        {isJoined ? <p>Joined</p> : <p>Join</p>}
                    </button>
            </div>
            
            </div>
        </div>
    )
}
