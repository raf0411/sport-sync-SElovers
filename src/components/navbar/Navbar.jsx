import React, { useState, useRef, useContext } from 'react';
import {Link, NavLink, Outlet } from 'react-router-dom';
import ProfileImage from '../../assets/profile-user.png';
import './navbar.css';
import ScrollToTop from '../ScrollToTop.jsx';
import MenuIcon from '../../assets/menu-icon.svg';
import Logo from '../../assets/logo.jpg';
import { AuthContext } from '../../context/authContext.jsx';

export default function navbar() {
  const menuRef = useRef();
  const [menu, setMenu] = useState("home");
  const { currentUser } = useContext(AuthContext);

  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle('open');
  }

  return (
    <header>
      <nav className='nav-container'>
        <img src={MenuIcon} alt="hamburger-menu" className='nav-dropdown' onClick={dropdownToggle}/>
        <ul ref={menuRef}>

        <li><Link to='/'><img src={Logo} alt="logo" className='logo'/></Link></li>
          <li><NavLink to='/' className="home">Home</NavLink></li>
          <li><NavLink to='/venues' className="venues">Venues</NavLink></li>
          <li><NavLink to='/community' className="community">Community</NavLink></li>
          <li><NavLink to='/group' className="groups">Groups</NavLink></li>

        </ul>
      
        <div className="nav-extra">
          {currentUser
            ?
            (<Link to='/profile'><img src={currentUser?.profilePic} alt="profile img" className='profile-img' /></Link>)
            :
            (<Link to='/login'><button className='login-btn'>Login</button></Link>)
          }
        </div>
      </nav>
      <Outlet />
      <ScrollToTop />
    </header>

  )
}