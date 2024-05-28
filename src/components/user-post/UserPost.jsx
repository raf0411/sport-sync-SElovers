import React, {useContext, useState} from 'react';
import './UserPost.css';

import addImg from '../../assets/add-img.svg';
import addVideo from '../../assets/add-video.svg';
import profilePic from '../../assets/profile-user.png';
import { AuthContext } from '../../context/authContext';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";


export default function UserPost() {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;

    } catch (err) {
      console.log(err);
    }
  }

  const { currentUser } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handlePost = async (e) => {
    e.preventDefault();

    let imgUrl = "";
    if (file) imgUrl = await upload();

    mutation.mutate({desc, img: imgUrl})
  }

  return (
    <div className='user-post-container'>
      <div className="user-post">
        <div className="post-comment">
          <img src={currentUser?.profilePic} alt="Profile Pic" className="profile-pic" />
          <input type="text" className="user-comment2" placeholder='Add post...' onChange={(e)=>setDesc(e.target.value)}/>
        </div>

        <div className="file-container">
          {file && <img className='file' alt='' src={URL.createObjectURL(file)} />}
        </div>
        
        <hr />
        
        <div className="post-img-video">
          <label htmlFor='img-file'>
            <img src={addImg} alt="Add Image" className="add-btn" />
            <p>Photo</p>
            <input style={{ display: "none" }} type="file" id='img-file' accept='image/*' onChange={e=>setFile(e.target.files[0])}/>
          </label>

          {/* <label htmlFor='video-file'>
            <img src={addVideo} alt="Add Video" className="add-btn" />
            <p>Video</p>
            <input style={{display: "none"}} type="file" id='video-file' accept='video/*' onChange={e=>setFile(e.target.files[0])}/>
          </label> */}

          <button className='post-btn' onClick={handlePost}>
            Post
          </button>
        </div>
      </div>
    </div>
  )
}
