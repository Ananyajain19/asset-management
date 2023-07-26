import React, { useEffect } from 'react'
import man from '../images/man.png'
import Button from '@mui/material/Button'

import { useAuth } from '../AuthContext'
import './Login.css'
import { useState } from 'react'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const {  saveToken ,navigate } = useAuth();

  

 
  const handleLogin = async () => {
    const userData = {
      email: email,
      password: password,
    };

    
    try {
      const response = await fetch('https://devassetapi.remotestate.com/asset-management/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      const token = data.token;
      
      console.log('Token:', token);
      saveToken(token)

      if(token){
        navigate('/dashboard')
      }

    } catch (error) {
      
      console.error('Error:', error);
    }
  };

  return (
    <div className='login-main-page' >
        <div className='login-page-img'>
            <img src={man} alt='man' className='login-img' style={{height:'25rem', width:'25rem'}}/>
        </div>
        <form className='login-details'>
            <h3>Login To Admin Panel</h3>
            
                <div className='input'>
                <label>Email</label>
                <br/>
                <input type="email" placeholder='Enter Email Id'    value={email}
                onChange={(e) => setEmail(e.target.value)}  style={{height: "30px", width: "220px"}} />
                </div>
                <div className='input'>
                <label>Password</label>
                <br/>
                <input type="password" placeholder='Enter Password'     value={password}
                onChange={(e) => setPassword(e.target.value)}  style={{height: "30px", width: "220px" , border:'none'}}/>
                <div>  <input type='checkbox' style={{height:'12px', width:'12px'}}/>Remember me</div>
                </div>
                <Button variant="contained" className='login-button' onClick={handleLogin}>Log In</Button>
             
        </form>
    </div>
  )
}

export default Login
