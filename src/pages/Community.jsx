import React, { useContext } from 'react'
import UserPost from '../components/user-post/UserPost.jsx';
import { Posts } from "../dummyData";
import Post from "../components/posts/Post.jsx";
import { AuthContext } from '../context/authContext.jsx';

import './CSS/Community.css'

export default function Community() {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className={currentUser ? '' : 'community'}>
      {currentUser ? <UserPost /> : <></>}
      
      {Posts.map((p) => (
        <Post key={p.id} post={p}/>
      ))}
    </div>
  )
}
