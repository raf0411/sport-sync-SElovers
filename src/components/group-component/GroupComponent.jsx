import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './GroupComponent.css';

export default function GroupComponent({ group }) {

    const [isJoined, setIsJoined] = useState(false);

    const handleIsJoined = () => {
        setIsJoined(!isJoined);
    }

    return (
        <div className='group-container'>
            <div className='group'>
                <Link to={`/group/${group.id}`} key={group}>
                    <img src={group.photo} alt="Group Image" />
                </Link>
                
                <div className="group-info">
                    <div className="container">
                        <Link className="group-name" to={`/group/${group.id}`} key={group}>{group.name}</Link>
                        <p className="group-members-count">{group.memberCount} members</p>
                    </div>
                    
                    <button className="join-btn" onClick={handleIsJoined}>
                        {isJoined ? <p>Joined</p> : <p>Join</p>}
                    </button>
                </div>
            </div>
        </div>
    )
}
