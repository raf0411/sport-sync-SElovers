import React, { useState } from 'react';
import './Post.css';

import thumbsUp from '../../assets/thumbs-up.svg';
import comment from '../../assets/comment.svg';
import share from '../../assets/share.svg';

import { Users } from "../../dummyData";

export default function Post({ post }) {
    
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    return (
        <div className='posts-container'>
            <div className="post">
                <div className="user-info">
                    <img src={Users.filter((u) => u.id === post.userId)[0].profilePic} alt="profile pic" className='user-profile-pic'/>
                    <div className="user-name-container">
                        <b><p className="user-group-name">{Users.filter((u) => u.id === post.userId)[0].group} Group</p></b>
                        <p className="user-name">{Users.filter((u) => u.id === post.userId)[0].username}</p>
                    </div>
                </div>
                
                <p className="post-description">{post.desc}</p>
                
                <img src={post.photo} alt="post image" className='post-img'/>
                
                <div className="like-count-container">
                    <img src={thumbsUp} alt="like image" className='like-img'/>
                    <b><p className='post-like-count'>{like}</p></b>
                </div>
                
                <hr />
                
                <div className="like-comment-share">
                    <div className="container">
                        <button className='like-btn' onClick={handleLike}><img src={thumbsUp} alt="Like" /></button>
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
                        <p className="user-name">user123</p>
                        <p className="user-comment">Foto lu jelek bro.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
