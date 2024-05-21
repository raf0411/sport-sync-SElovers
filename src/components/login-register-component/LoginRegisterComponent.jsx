import React, { useRef } from 'react';
import './LoginRegisterComponent.css';
import { Link } from 'react-router-dom';

export default function LoginRegisterComponent() {
  const email = useRef();
  const password = useRef();

  // kalo udh ada API
  // const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
  //   e.preventDefault();
  //   loginCall(
  //     { email: email.current.value, password: password.current.value },
  //     dispatch
  //   );
  };

  return (
    <div className='login-reg'>
      <form className="login-reg-container" onSubmit={handleClick}>
        <h1>Login</h1>

        <div className="input-container">
          <input type="email" className="email-input" placeholder='Email address' required/>
          <input type="password" className="password-input" placeholder='Password' required/>
        </div>

        <button className='continue-btn' type='submit'>Continue</button>

        <p className="create-account">
          Create an account? <span><Link href="" to='/register'>Click here</Link></span>
        </p>
        
        <div className="login-reg-agree">
            <input type="checkbox" required/>
            <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

      </form>
    </div>
  )
}
