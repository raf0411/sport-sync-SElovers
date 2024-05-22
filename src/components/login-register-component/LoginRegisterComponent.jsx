import React, { useEffect, useState } from 'react';
import './LoginRegisterComponent.css';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginRegisterComponent() {
  const [inputs, setInputs] = useState({
    email:"",
    password: "",
  });

  const navigate = useNavigate();
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate("/");
    }
  }, [formErrors, isSubmit, navigate]);

  const handleCheckboxChange = e => {
    setCheckboxChecked(e.target.checked);
  };

  const handleSubmit = async e => {
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate("/");
    }
    e.preventDefault()
    setFormErrors(validate(inputs, checkboxChecked));
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
      errors.password = "Password must be at least 4 characters"
    } else if (values.password.length > 12) {
      errors.password = "Password cannot be more than 12 characters"
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

        <button className='continue-btn' type='submit' onClick={handleSubmit}>Continue</button>

        <p className="create-account">
          Create an account? <span><Link href="" to='/register'>Click here</Link></span>
        </p>
        
        <div className="login-reg-agree">
            <input type="checkbox" checked={checkboxChecked} onChange={handleCheckboxChange} required/>
            <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

        <p className='error-text'>{formErrors.terms}</p>

      </form>
    </div>
  )
}
