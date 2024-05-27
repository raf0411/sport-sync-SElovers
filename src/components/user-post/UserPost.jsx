import React, {useContext} from 'react';
import './UserPost.css';

import addImg from '../../assets/add-img.svg';
import addVideo from '../../assets/add-video.svg';
import profilePic from '../../assets/profile-user.png';
import { AuthContext } from '../../context/authContext';

export default function UserPost() {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='user-post-container'>
      <div className="user-post">
        <div className="post-comment">
          <img src={currentUser?.profilePic} alt="Profile Pic" className="profile-pic" />
          <input type="text" className="user-comment2" placeholder='Add post...'/>
        </div>
        
        <hr />
        
        <div className="post-img-video">
          <label htmlFor='img-file'>
            <img src={addImg} alt="Add Image" className="add-btn" />
            <p>Photo</p>
            <input style={{ display: "none" }} type="file" id='img-file' accept='image/*'/>
          </label>

          <label htmlFor='video-file'>
            <img src={addVideo} alt="Add Video" className="add-btn" />
            <p>Video</p>
            <input style={{display: "none"}} type="file" id='video-file' accept='video/*'/>
          </label>

          <button className='post-btn'>
            Post
          </button>
        </div>
      </div>
    </div>
  )
}
