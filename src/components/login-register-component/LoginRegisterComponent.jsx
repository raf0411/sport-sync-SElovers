import React, { useContext, useEffect, useState } from 'react';
import './LoginRegisterComponent.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import navbar from '../navbar/Navbar';
import { AuthContext } from '../../AuthContext';

export default function LoginRegisterComponent() {
  const { setIsLogin } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loginError, setLoginError] = useState(null); // State for login error

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleCheckboxChange = e => {
    setCheckboxChecked(e.target.checked);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errors = validate(inputs, checkboxChecked);
    setFormErrors(errors);
    setIsSubmit(true);
    if (Object.keys(errors).length === 0) {
      handleLogin(); // Perform login if there are no validation errors
    }
  }

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:8801/backend/auth/login", inputs);
      setIsLogin(true);
      navigate("/"); // Navigate to homepage on successful login
    } catch (err) {
      setLoginError(err.response?.data || "Login failed. Please try again."); // Set login error message
    }
  }

  const validate = (values, isChecked) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Please input a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be at least 4 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot be more than 12 characters";
    }

    if (!isChecked) {
      errors.terms = "You must agree to the terms and conditions!";
    }

    return errors;
  }

  return (
    <div className='login-reg'>
      <form className="login-reg-container" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="input-container">
          <input type="email" className="email-input" placeholder='Email address' onChange={handleChange} name='email' value={inputs.email} required />
          <p className='error-text'>{formErrors.email}</p>

          <input onChange={handleChange} type="password" className="password-input" placeholder='Password' name='password' value={inputs.password} required />
          <p className='error-text'>{formErrors.password}</p>
        </div>

        <button className='continue-btn' type='submit'>Continue</button>
        
        {loginError && <p className='error-text'>{loginError}</p>} {/* Display login error */}

        <p className="create-account">
          Create an account? <span><Link to='/register'>Click here</Link></span>
        </p>

        <div className="login-reg-agree">
          <input type="checkbox" checked={checkboxChecked} onChange={handleCheckboxChange} required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

        <p className='error-text'>{formErrors.terms}</p>

      </form>
    </div>
  );
}
