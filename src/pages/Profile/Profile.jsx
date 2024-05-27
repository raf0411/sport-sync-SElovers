import React, { useContext } from 'react';
import './Profile.css';
import { AuthContext } from '../../context/authContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <div className='profile-container'>
      <div className="profile">
        <div className="profile-images">
          {currentUser
            ?
            <img className="profile-background-img" src={currentUser?.backgroundPic} />
            :
            <img className="profile-profile-img" src='../../public/images/group-futsall.jpg' />
          }
          
          {currentUser
            ?
            <img className="profile-profile-img" src={currentUser.profilePic} />
            : 
            <img className="profile-profile-img" src='../../public/images/profile-user.png' />
          }
        </div>

        <div className="profile-info">
          <p className="profile-name">{currentUser?.name}</p>
          <p className="profile-username">@{currentUser?.username}</p>
          <p className="profile-desc">{currentUser?.description}</p>
        </div>

        <div className="container">
          <div className="user-info">
            <p className='user-information-text'>User Information</p>

            <div className="user-info-container">
              <img src="../public/images/city.svg" alt="city" />
              <p className='user-city'>&nbsp; {currentUser?.city}</p>
            </div>

            <div className="user-info-container">
              <img src="../public/images/country.svg" alt="country" />
              <p className='user-from'>&nbsp; {currentUser?.country}</p>
            </div>
            
            <div className="user-info-container">
              {currentUser ?
                (<img src={`../public/images/${currentUser?.gender}-gender.svg`} alt="gender" />)
                : 
                (<span>?</span>)
                }
              
              <p className='user-gender'>&nbsp; {currentUser?.gender}</p> 
            </div>
          </div>

          <div className="user-follower">
            <div className="follower-container">
              <p className='user-follower-text'>Followers </p>
              <p className="follower-count">{currentUser?.followers}</p>
            </div>
            <div className="following-container">
              <p className='user-following-text'>Following</p>
              <p className="following-count">{currentUser?.followings}</p>
            </div>
          </div>
        </div>

        <div className="btn-container">
          <button className='add-sport-btn'><img src="../public/images/add-circle.svg" alt="add" /> &nbsp; Add a Sport</button>
          <button className='edit-btn'>Edit Profile</button>
            {/* kalo profile lain */}
            {/* <button className='follow-btn'>Follow</button> */}
            {/* <button className='chat-btn'>Chat</button>  */}
            <button className='chat-btn' onClick={handleLogout}>Logout</button>
        </div>

      </div>
    </div>
  )
}