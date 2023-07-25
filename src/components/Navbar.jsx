import React from 'react'
import logo from '../images/logo.png'
import girl from '../images/girl.png'
import arrow from '../images/arrow down.png'
import './Navbar.css'
const Navbar = () => {
  return (
   <div className='NavBar'>
        <div className='left'>
        <div className='header-logo'>
            
        <div className='header-logo-img'><img src={logo} alt="logo" /></div>
        <div>
            <div className='upper-title'>Storex</div>
            <div className='line'></div>
            <div className='lower-title'>Asset Management</div>
        </div>
        </div>
        
        <div className='header-options' >
            <div>Assets List</div>
            <div>Employer List</div>
            <div>Accessed By</div>
        </div>
        </div>
        <div className='profile-img'>
            <div className='profile-name'>Nitya Jain </div>
            <img src={girl} alt="girl" style={{borderRadius:"100%"}}/>
            <img src={arrow} alt="" />
            </div>
      </div>
   
  )
}

export default Navbar
