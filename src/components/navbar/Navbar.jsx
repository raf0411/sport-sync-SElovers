import React, { useState, useRef, useContext } from 'react';
import {Link, NavLink, Outlet } from 'react-router-dom';
import ProfileImage from '../../assets/profile-user.png';
import './navbar.css';
import ScrollToTop from '../ScrollToTop.jsx';
import MenuIcon from '../../assets/menu-icon.svg';
import { AuthContext } from '../../AuthContext.jsx';

export default function navbar() {
  const menuRef = useRef();
  const { isLogin } = useContext(AuthContext); 
  const [menu, setMenu] = useState("home");
  // let [isLogin, setIsLogin] = useState(false);

  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle('open');
  }

  return (
    <header>
      <nav className='nav-container'>
        <img src={MenuIcon} alt="" className='nav-dropdown' onClick={dropdownToggle}/>
        <ul ref={menuRef}>
          <li><Link to='/'><img src="" alt="logo" className='logo'/></Link></li>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/venues'>Venues</NavLink></li>
          <li><NavLink to='/community'>Community</NavLink></li>
          <li><NavLink to='/group'>Groups</NavLink></li>
        </ul>
      
        <div className="nav-extra">
          {isLogin ? <Link to='/profile'><img src={ProfileImage} alt="profile img" className='profile-img' /></Link> : <Link to='/login'><button className='login-btn'>Login</button></Link>}
        </div>
      </nav>
      <Outlet />
      <ScrollToTop />
    </header>

  )
}