import React, { useState } from 'react';
import './GroupComponent.css';

export default function GroupComponent({ group }) {

    const [isJoined, setIsJoined] = useState(false);

    const handleIsJoined = () => {
        setIsJoined(!isJoined);
    }

    return (
        <div className='group-container'>
            <div className='group'>
                <img src={group.photo} alt="Group Image" />
                
                <div className="group-info">
                    <div className="container">
                        <p className="group-name">{group.name}</p>
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
