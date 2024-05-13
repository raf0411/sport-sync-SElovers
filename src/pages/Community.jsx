import React from 'react'
import UserPost from '../components/user-post/UserPost.jsx';
import { Posts } from "../dummyData";
import Post from "../components/posts/Post.jsx";

export default function Community() {
  return (
    <div>
      <UserPost />
      {Posts.map((p) => (
        <Post key={p.id} post={p}/>
      ))}
    </div>
  )
}
