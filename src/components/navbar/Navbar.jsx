import React from 'react';
import './navbar.css';

export default function navbar() {
  return (
    <nav className='nav-container'>
      <ul>
        <a href="#"><img src="" alt="logo" className='logo'/></a>
        <li><a href="#">Home</a></li>
        <li><a href="#">Venues</a></li>
        <li><a href="#">Community</a></li>
      </ul>
    
      <div className="login-reg profile">
        <ul>
            <li><button className='btn'>Login</button></li>
        </ul>
      </div>
    </nav>
  )
}
