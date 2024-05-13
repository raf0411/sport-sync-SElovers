import React from 'react';
import './Post.css';

import thumbsUp from '../../assets/thumbs-up.svg';
import comment from '../../assets/comment.svg';
import share from '../../assets/share.svg';

import { Users } from "../../dummyData";

export default function Post({post}) {
    return (
        <div className='posts-container'>
        <div className="post">
            <div className="user-info">
                <img src={Users.filter((u) => u.id === post.userId)[0].profilePic} alt="profile pic" className='user-profile-pic'/>
                <div className="user-name-container">
                    <p className="user-group-name">{Users.filter((u) => u.id === post.userId)[0].group}</p>
                    <p className="user-name">{Users.filter((u) => u.id === post.userId)[0].username}</p>
                </div>
            </div>
            
            <p className="post-description">{post.desc}</p>
            
            <img src={post.photo} alt="post image" className='post-img'/>
            
            <div className="like-count-container">
                <img src={thumbsUp} alt="like image" className='like-img'/>
                <b><p className='post-like-count'>{post.like}</p></b>
            </div>
            
            <hr />
            
            <div className="like-comment-share">
                <div className="container">
                    <button className='like-btn'><img src={thumbsUp} alt="Like" /></button>
                    <p>Like</p>
                </div>
                <div className="container">
                    <button className='comment-btn'><img src={comment} alt="Comment" /></button>
                    <p>Comment</p>
                </div>
                <div className="container">
                    <button className='share-btn'><img src={share} alt="Share" /></button>
                    <p>Share</p>
                </div>
            </div>
            
            <hr />
            
            <div className="comments">
                <div className="comment-container">
                    <p className="user-name">Nama User</p>
                    <p className="user-comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolores adipisci ex, deleniti ipsum officiis nisi possimus nobis assumenda incidunt eaque natus doloribus?</p>
                </div>
            </div>

        </div>
        </div>
    )
}
