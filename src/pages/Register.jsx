import React, { useState, useEffect } from 'react';
import '../components/login-register-component/LoginRegisterComponent.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckboxChange = e => {
    setCheckboxChecked(e.target.checked);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await axios.post("auth/register", inputs);
    } catch (err) {
      setFormErrors(err.response.data);
    }

    setFormErrors(validate(inputs, checkboxChecked));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      registerUser();
    }
  }, [formErrors]);

  const registerUser = async () => {
    try {
      const response = await axios.post("http://localhost:8801/backend/auth/register", inputs);
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      } else {
        setError("Registration failed. Please try again later.");
      }
    }
  };

  const validate = (values, isChecked) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.username) {
      errors.username = "Username is required!";
    }
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
  };

  return (
    <div className='login-reg'>
      <form className="login-reg-container" onSubmit={handleSubmit}>
        <h1>Register</h1>

        <div className="input-container">
          <input type="text" className="name-input" placeholder='Your name' name='name' onChange={handleChange} value={inputs.name} />
          <p className='error-text'>{formErrors.name}</p>

          <input type="text" className="username-input" placeholder='Username' name='username' onChange={handleChange} value={inputs.username} />
          <p className='error-text'>{formErrors.username}</p>

          <input type="email" className="email-input" placeholder='Email address' name='email' onChange={handleChange} value={inputs.email} />
          <p className='error-text'>{formErrors.email}</p>

          <input type="password" className="password-input" placeholder='Password' name='password' onChange={handleChange} value={inputs.password} />
          <p className='error-text'>{formErrors.password}</p>

        </div>

        <button type='submit' className='continue-btn'>Continue</button>
        {err && <p className='userexisterr'>{err}</p>}

        {Object.keys(formErrors).length === 0 && isSubmit && !err && <div className='success-message'>Account has been created!</div>}

        <p className="create-account">
          Already have an account? <span><Link to='/login'>Login</Link></span>
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
