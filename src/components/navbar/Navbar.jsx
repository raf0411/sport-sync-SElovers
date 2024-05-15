import React, { useState } from 'react';
import {Link, NavLink, Outlet } from 'react-router-dom';
import ProfileImage from '../../assets/profile-user.png';
import './navbar.css';

export default function navbar() {

  const [menu, setMenu] = useState("home");
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <nav className='nav-container'>
        <ul>
          <a href="#"><img src="" alt="logo" className='logo'/></a>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/venues'>Venues</NavLink></li>
          <li><NavLink to='/community'>Community</NavLink></li>
          <li><NavLink to='/group'>Group</NavLink></li>
        </ul>
      
        {isLogin ? <Link to='/profile'><img src={ProfileImage} alt="profile img" className='profile-img'/></Link> : <Link to='/login'><button className='login-btn'>Login</button></Link>}
        
        
      </nav>
      <Outlet />
    </>

  )
}
