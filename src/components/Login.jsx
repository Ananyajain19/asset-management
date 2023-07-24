import React from 'react'
import man from '../images/man.png'
import './Login.css'
function Login() {
  return (
    <div className='login-main-page' >
        <div className='login-page-img'>
            <img src={man} alt='man' className='login-img'/>
        </div>
        <form className='login-details'>
            <h1>Login To Admin Panel</h1>
            
                <div className='input'>
                <label>Email</label>
                <input type="text" placeholder='Enter Email Id' style={{height: "30px", width: "200px"}}/>
                </div>
                <div className='input'>
                <label>Password</label>
                <input type="password" placeholder='Enter Password'  style={{height: "30px", width: "200px" , border:'none'}}/>
                </div>
                <div><input type='checkbox' style={{height:'12px', width:'12px'}}/>
                Remember me</div>
                
            
        </form>
    </div>
  )
}

export default Login
