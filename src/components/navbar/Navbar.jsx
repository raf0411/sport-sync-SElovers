import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navbar.css';

export default function navbar() {

  const [menu, setMenu] = useState("home");

  return (
    <>
      <nav className='nav-container'>
        <ul>
          <a href="#"><img src="" alt="logo" className='logo'/></a>
          <li onClick={() => {setMenu("home")}}> <Link to='/'>Home</Link> {menu === "home" ? <hr/> : <></>} </li>
          <li onClick={() => {setMenu("venues")}}> <Link to='/venues'>Venues</Link> {menu === "venues" ? <hr/> : <></>}</li>
          <li onClick={() => {setMenu("community")}}> <Link to='/community'>Community</Link> {menu === "community" ? <hr/> : <></>}</li>
          <li onClick={() => {setMenu("group")}}> <Link to='/group'>Group</Link> {menu === "group" ? <hr/> : <></>}</li>
        </ul>
      
        <Link to='/login'><button className='login-btn'>Login</button></Link>
      </nav>
      <Outlet />
    </>

  )
}
