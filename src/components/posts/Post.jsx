import React, { useContext, useState } from 'react';
import './Post.css';

import thumbsUp from '../../assets/thumbs-up.svg';
import comment from '../../assets/comment.svg';
import share from '../../assets/share.svg';

import { makeRequest } from '../../axios.js';
import { AuthContext } from '../../context/authContext.jsx';
import { useQuery, useQueryClient, useMutation} from '@tanstack/react-query';

export default function Post({ post }) {
    const { currentUser } = useContext(AuthContext);

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (liked) => {
            if(liked) return makeRequest.delete("/likes?postId="+ post.id);
            return makeRequest.post("/likes", { postId: post.id });
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['likes'] });
      },
    });

    const { isLoading, error, data } = useQuery({
        queryKey: ['likes', post.id],
        queryFn: () => makeRequest.get("/likes?postId=" + post.id).then(res => res.data),
    });

    const handleLike = () => {
        mutation.mutate(data.includes(currentUser.id));
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='posts-container'>
            <div className="post">
                <div className="user-info">
                    <img src={post.profilePic} alt="profile pic" className='user-profile-pic' />
                    <div className="user-name-container">
                        <b><p className="user-group-name">{post.group} Group</p></b>
                        <p className="user-name">@{post.username}</p>
                    </div>
                </div>

                <p className="post-description">{post.desc}</p>

                <img src={"./upload/" + post.img} alt="" className='post-img' />
                <img src={post.img} alt="" className='post-img' />

                <div className="like-count-container">
                    <img src={thumbsUp} alt="like image" className='like-img' />
                    <b><p className='post-like-count'>{data ? data.length : 0}</p></b>
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
    );
}
