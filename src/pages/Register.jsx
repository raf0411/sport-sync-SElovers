import React, { useRef } from 'react';
import '../components/login-register-component/LoginRegisterComponent.css';
import { Link } from 'react-router-dom';

export default function Register() {

  const username = useRef();
  const email = useRef();
  const password = useRef();

  return (
    <div className='login-reg'>
      <form className="login-reg-container" onSubmit={handleClick}>
        <h1>Register</h1>

        <div className="input-container">
          <input type="text" className="name-input" placeholder='Your name' required/>
          <input type="text" className="username-input" placeholder='Username' required/>
          <input type="email" className="email-input" placeholder='Email address' required/>
          <input type="password" minLength="6" className="password-input" placeholder='Password' required/>
        </div>

        <button className='continue-btn' type='submit'>Continue</button>

        <p className="create-account">
          Already have an account? <span><Link href="" to='/login'>Login</Link></span>
        </p>
        
        <div className="login-reg-agree">
            <input type="checkbox" required/>
            <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

      </form>
    </div>
  )
}
