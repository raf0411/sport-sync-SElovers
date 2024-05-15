import React from 'react';
import '../components/login-register-component/LoginRegisterComponent.css';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='login-reg'>
      <div className="login-reg-container">
        <h1>Register</h1>

        <div className="input-container">
          <input type="text" className="name-input" placeholder='Your name'/>
          <input type="text" className="username-input" placeholder='Username'/>
          <input type="email" className="email-input" placeholder='Email address'/>
          <input type="password" className="password-input" placeholder='Password'/>
        </div>

        <button className='continue-btn'>Continue</button>

        <p className="create-account">
          Already have an account? <span><Link href="" to='/login'>Login</Link></span>
        </p>
        
        <div className="login-reg-agree">
            <input type="checkbox" />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

      </div>
    </div>
  )
}
