import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function navbar() {

  const [menu, setMenu] = useState("home");

  return (
    <nav className='nav-container'>
      <ul>
        <a href="#"><img src="" alt="logo" className='logo'/></a>
        <li onClick={() => {setMenu("home")}}> <Link to='/'>Home</Link> {menu === "home" ? <hr/> : <></>} </li>
        <li onClick={() => {setMenu("venues")}}> <Link to='/venues'>Venues</Link> {menu === "venues" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("community")}}> <Link to='/community'>Community</Link> {menu === "community" ? <hr/> : <></>}</li>
      </ul>
    
      <div className="login-reg profile">
        <Link to='/login'><button className='btn'>Login</button></Link>
      </div>
    </nav>
  )
}
