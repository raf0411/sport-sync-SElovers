import React, { useContext } from 'react'
import UserPost from '../components/user-post/UserPost.jsx';
import { Posts } from "../dummyData";
import Post from "../components/posts/Post.jsx";
import { AuthContext } from '../context/authContext.jsx';
import { useQuery } from '@tanstack/react-query';
import './CSS/Community.css'
import { makeRequest } from '../axios.js';

export default function Community({userId}) {
  const { isPending, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => makeRequest.get("/posts?userId="+userId).then(res => res.data),
  });

  const {currentUser} = useContext(AuthContext);

  return (
    <div className={currentUser ? '' : 'community'}>
      {currentUser ? <UserPost /> : <></>}
      
      {error ?
        "Something went wrong"
        : isPending
        ? "loading"
        : data.map((p) => (<Post key={p.id} post={p}/>))}
    </div>
  )
}
