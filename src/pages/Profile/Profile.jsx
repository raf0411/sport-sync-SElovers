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
          <p className="profile-name">Nama Orang</p>
          <p className="profile-username">@usernameorang</p>
          <p className="profile-desc">Deskripsi ini, bisa apa ajaaaa.</p>
        </div>

        <div className="container">
          <div className="user-info">
            <p className='user-information-text'>User Information</p>

            <div className="user-info-container">
              <img src="../public/images/city.svg" alt="city" />
              <p className='user-city'>&nbsp; Jakarta</p>
            </div>

            <div className="user-info-container">
              <img src="../public/images/country.svg" alt="country" />
              <p className='user-from'>&nbsp; Indonesia</p>
            </div>
            
            <div className="user-info-container">
              <img src="../public/images/male-gender.svg" alt="gender" />
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
          <button className='edit-btn'>Edit Profile</button>
          {/* kalo profile lain */}
          {/* <button className='follow-btn'>Follow</button> */}
          {/* <button className='chat-btn'>Chat</button>  */}
          <button className='chat-btn'>Logout</button>
          
        </div>

      </div>
    </div>
  )
}
