import React from 'react';
import './Post.css';

export default function Post() {
  return (
    <div className='posts-container'>
      <div className="post">
        <div className="user-info">
            <img src="" alt="user profile pic" className='user-profile-pic'/>
            <div className="user-name-container">
                <p className="user-group-name">Nama Group</p>
                <p className="user-name">Nama User</p>
            </div>
        </div>
        
        <p className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati perspiciatis unde quae numquam recusandae, placeat nostrum rem dolores inventore nisi veritatis, ducimus, voluptas id laudantium asperiores hic. Id, consectetur harum.</p>
        
        <img src="" alt="post image" className='post-img'/>
        
        <div className="like-count-container">
            <img src="" alt="like image" className='like-img'/>
            <p className='post-like-count'>69</p>
        </div>
        
        <hr />
        
        <div className="like-comment-share">
            <div className="container">
                <button className='like-btn'><img src="" alt="Like" /></button>
            </div>
            <div className="container">
                <button className='comment-btn'><img src="" alt="Comment" /></button>
            </div>
            <div className="container">
                <button className='share-btn'><img src="" alt="Share" /></button>
            </div>
        </div>
        
        <hr />
        
        <div className="comments">
            <div className="comment-container">
                <p className="user-name">Nama User</p>
                <p className="user-comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolores adipisci ex, deleniti ipsum officiis nisi possimus nobis assumenda incidunt eaque natus doloribus voluptate fugiat amet, fugit repellendus obcaecati doloremque?</p>
            </div>
        </div>

      </div>
    </div>
  )
}
