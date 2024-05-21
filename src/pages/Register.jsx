import React, {useState} from 'react';
import '../components/login-register-component/LoginRegisterComponent.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [inputs, setInputs] = useState({
    name:"",
    username:"",
    email:"",
    password:"",
  });

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      const res = await axios.post("http://localhost:8800/backend/auth/register", inputs);
      console.log(res)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='login-reg'>
      <div className="login-reg-container">
        <h1>Register</h1>

        <div className="input-container">
          <input type="text" className="name-input" placeholder='Your name' name = 'name' onChange = {handleChange}/>
          <input type="text" className="username-input" placeholder='Username'name = 'username' onChange = {handleChange}/>
          <input type="email" className="email-input" placeholder='Email address' name = 'email' onChange = {handleChange}/>
          <input type="password" className="password-input" placeholder='Password' name = 'password' onChange = {handleChange}/>
        </div>

        <button onClick = {handleSubmit} className='continue-btn'>Continue</button>

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
