import React from 'react';
import './LoginRegisterComponent.css';

export default function LoginRegisterComponent() {
  return (
    <div className='login-reg'>
      <div className="login-reg-container">
        <h1>Login</h1>

        <div className="input-container">
          <input type="text" className="email-input" placeholder='Email address'/>
          <input type="password" className="password-input" placeholder='Password'/>
        </div>

        <button className='continue-btn'>Continue</button>

        <p className="create-account">
          Create an account? <span><a href="">Click here</a></span>
        </p>
        
        <div className="login-reg-agree">
            <input type="checkbox" />
            <p> By continuing, I agree to the terms of use & privacy policy</p>   
        </div>

      </div>
    </div>
  )
}
