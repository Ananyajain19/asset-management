import React from 'react'
import { useAuth } from '../AuthContext'
import { useEffect } from 'react';
import './Navbar'
import Navbar from './Navbar';
import './Dashboard.css'
import drive from '../images/drive (2).png'
import sun from '../images/sun.png'
import hand from '../images/hand.png'
import CircularProgress from '@mui/material/CircularProgress';
function InfoBox ({assetImg,description,total , percentage}){
   return(
      <div className='box'>
        <div className='box-img'><img src={assetImg} alt="description" style={{borderRadius:'100%' ,height :"50px"}}/></div>
        <div className='box-info'>
            <div className='box-heading'>{`${description}`}</div>
            <div className='box-total'>{total}</div>
            <div className='box-percent'>{percentage}</div> 
        </div>
      </div>
   );
}

const Dashboard = () => {
    const { token, saveToken , assetInfo } = useAuth();
    // console.log(assetInfo.totalAssets)

   if(!assetInfo){
    return(
        <div>
            <CircularProgress/> Loading 
        </div>
    );
   }

  return (
    <div>
      <Navbar/>
      <div className='assets-box'>
      <div><InfoBox assetImg={drive} description={"Total Assets"} total={assetInfo.totalAssets} percentage={"7.8%  this month"}/></div>
      <div><InfoBox assetImg={sun} description={"Distributed Assets"} total={assetInfo.distributedAssets} percentage={"2.8%  this month"}/></div>
      <div><InfoBox assetImg={hand} description={"Available Assets"} total={assetInfo.availableAssets} /></div>
      
      </div>
    </div>
  )
}

export default Dashboard
