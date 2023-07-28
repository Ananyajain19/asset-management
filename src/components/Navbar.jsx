import React from 'react'
import logo from '../images/logo.png'
import girl from '../images/girl.png'
import arrow from '../images/arrow down.png'
import './Navbar.css'
import { useAuth } from '../AuthContext'

const Navbar = () => {
    
  const {navigate,clearToken} = useAuth();
  
   const handleLogout =() => {
    clearToken();
    navigate('/')
   }

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
            <div className='assets-list' onClick={()=> navigate('/dashboard/assetList')}>Assets List</div>
            <div className='employer-list'>Employer List</div>
            <div className='accessed-by'>Accessed By</div>
        </div>
        </div>
        <div className='profile-img'>
            <div className='profile-name'>Nitya Jain </div>
            <img src={girl} alt="girl" style={{borderRadius:"100%"}}/>
            <img src={arrow} alt="arrow" onClick={handleLogout} className='navbar-arrow' />
            </div>
      </div>
   
  )
}

export default Navbar
