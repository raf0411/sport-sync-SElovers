import React from 'react';
import './Profile.css';

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className="profile">
        <div className="profile-images">
          <img className="profile-background-img" src='../../public/images/group-futsall.jpg'></img>
          <img className="profile-profile-img" src='../../public/images/profile-user.png'></img>
        </div>

        <div className="profile-info">
          <p className="profile-name">Aubrey Graham</p>
          <p className="profile-username">@aubreygraham17</p>
          <p className="profile-desc">I like kids.</p>
        </div>

        <div className="container">
          <div className="user-info">
            <p className='user-information-text'>User Information</p>

            <div className="user-info-container">
              <img src="../public/images/city.svg" alt="city" />
              <p className='user-city'>&nbsp; Jakarta</p>
            </div>

            <div className="user-info-container">
              <img src="../public/images/location.svg" alt="city" />
              <p className='user-from'>&nbsp; Indonesia</p>
            </div>
            
            <div className="user-info-container">
              <img src="../public/images/male-gender.svg" alt="city" />
              <p className='user-gender'>&nbsp; Male</p> 
            </div>
          </div>

          <div className="user-follower">
            <div className="follower-container">
              <p className='user-follower-text'>Followers </p>
              <p className="follower-count">69</p>
            </div>
            <div className="following-container">
              <p className='user-following-text'>Following </p>
              <p className="following-count">1</p>
            </div>
          </div>

        </div>

        <div className="btn-container">
          <button className='add-sport-btn'><img src="../public/images/add-circle.svg" alt="add" /> &nbsp; Add a Sport</button>
          <button className='follow-btn'>Follow</button>
          <button className='chat-btn'>Chat</button>
        </div>

      </div>
    </div>
  )
}
