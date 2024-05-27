import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import './GroupDetail.css';
import GroupImage from '../../assets/group-image.jpg';
import SportImage from '../../assets/profile-user.png';
import Members from '../../assets/members.svg';
import { Groups } from '../../dummyData';

export default function GroupDetail() {
  const params = useParams();
  const groupId = Number(params.groupId);

  const [isJoined, setIsJoined] = useState(false);

  const handleIsJoined = () => {
    setIsJoined(!isJoined);
  };

  return (
    <div className='group-detail'>
      <div className="group-detail-container">
        <img src={Groups.filter((g) => g.id === groupId)[0].photo} alt="Group Image" className='group-img'/>
        <img src={SportImage} alt="Group Image" className='sport-img' />
        
        <div className="container">
          <div className="group-info">
            <div className="group-details">
              <p className="group-name">
                {Groups.filter((g) => g.id === groupId)[0].name}
              </p>
              
              <div className='member-container'>
                <p className="group-type">
                  <img src={`../../../public/images/${Groups.filter((g) => g.id === groupId)[0].type}.svg`} alt="public/private" />
                  {Groups.filter((g) => g.id === groupId)[0].type}
                  &nbsp;
                </p>
                &middot; &nbsp;
                <p className="group-member-count">
                  <img src={Members} alt="member logo" /> 
                  {Groups.filter((g) => g.id === groupId)[0].memberCount}
                </p>
              </div>
            </div>

            <div className="group-btn">
              <button className="join-btn" onClick={handleIsJoined}>
                {isJoined ? <>Joined</> : <>Join Group</>}
              </button>
              <button className="share-btn">
                Share
              </button>
            </div>
          </div>

          <div className="group-detail-info">
            <hr />
            <div className="group-admins">
              <b><p>Group admins</p></b>
              <p>{Groups.filter((g) => g.id === groupId)[0].admins}</p>
            </div>
            <hr />
            <div className="group-members">
              <b><p>Group members</p></b>
              <p>{Groups.filter((g) => g.id === groupId)[0].members}</p>
            </div>
            <hr />
            <div className="group-location">
              <b><p>Location</p></b>
              <p className="location">
                {Groups.filter((g) => g.id === groupId)[0].location}
              </p>
            </div>
            <hr />
            <div className="group-description">
              <b><p>Description</p></b>
              <p className="description">
                {Groups.filter((g) => g.id === groupId)[0].description}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
