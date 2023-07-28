import React, { useState } from 'react'
import logo from '../images/logo.png'
import girl from '../images/girl.png'
import arrow from '../images/arrow down.png'
import './Navbar.css'
import { useAuth } from '../AuthContext'


function ArrowDropdown ({clearToken,navigate}){
    const handleLogout =() => {
        clearToken();
        navigate('/')
       }
    return(
        <div className='logout-button' onClick={handleLogout}>Logout</div>
    )
}

const Navbar = () => {
    
  const {navigate,clearToken} = useAuth();
  const[Arrow , setArrow] = useState(false) 
  
   const handleArrow=()=>{
    if(Arrow){
        setArrow(false)
    }else{
        setArrow(true)
    }
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
            
            <img src={arrow} alt="arrow" onClick={handleArrow} className='navbar-arrow' />
            <div>{Arrow&&<ArrowDropdown clearToken={clearToken} navigate={navigate}/>}</div>
            
            </div>
      </div>
   
  )
}

export default Navbar
