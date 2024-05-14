import React from 'react';
import './GroupComponent.css';

export default function GroupComponent({ group }) {

    return (
        <div className='group-container'>
            <div className='group'>
                <img src={group.photo} alt="Group Image" />
                
                <div className="group-info">
                    <div className="container">
                        <p className="group-name">{group.name}</p>
                        <p className="group-members-count">{group.memberCount} members</p>
                    </div>
                    
                    <button className="join-btn">Join</button>
                </div>
            </div>
        </div>
    )
}
