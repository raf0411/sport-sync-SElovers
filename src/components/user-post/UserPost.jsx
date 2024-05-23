import React from 'react';
import './UserPost.css';

import addImg from '../../assets/add-img.svg';
import addVideo from '../../assets/add-video.svg';
import profilePic from '../../assets/profile-user.png';

export default function UserPost() {
  return (
    <div className='user-post-container'>
      <div className="user-post">
        <div className="post-comment">
          <img src={profilePic} alt="Profile Pic" className="profile-pic" />
          <input type="text" className="user-comment" placeholder='Add post...'/>
        </div>
        
        <hr />
        
        <div className="post-img-video">
          <label htmlFor='file'>
            <img src={addImg} alt="Add Image" className="add-btn" />
            <p>Photo</p>
            <input style={{ display: "none" }} type="file" id='file' accept='.png,.jpg,.jpeg'/>
          </label>

          <label htmlFor='file'>
            <img src={addVideo} alt="Add Video" className="add-btn" />
            <p>Video</p>
            <input style={{display: "none"}} type="file" accept='.mp4,.mov,.gif'/>
          </label>
          <button className='post-btn'>
            Post
          </button>
        </div>
      </div>
    </div>
  )
}
