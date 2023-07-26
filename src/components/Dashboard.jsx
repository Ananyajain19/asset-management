// import React, { useEffect } from 'react';
import { useAuth } from '../AuthContext.js';
import Navbar from './Navbar';
import './Dashboard.css';
import CircularProgress from '@mui/material/CircularProgress';

import drive from '../images/drive (2).png'
import sun from '../images/sun.png'
import hand from '../images/hand.png'

import uparrow from '../images/uparrow.svg'


import laptop from '../images/laptop.jpg'
import mouse from '../images/mouse.jpg'
import harddrive from '../images/harddrive.jpg'
import pendrive from '../images/pendrive.jpg'
import mobile from '../images/mobile.jpg'
import sim from '../images/sim.jpg'



function InfoBox({assetImage, assetDiscription, assetCount, arrow, assetRaise}){
    return(
        <div className='box'>
            <div className='imagediv'>
            <img src={assetImage} alt="assetImage" style={{borderRadius:"100%", height:"50px"}} />
            </div>
             <div className='asset-details '>
               <div style={{fontSize:"17px"}}> {assetDiscription}</div>
               <div style={{fontSize:"40px", fontWeight:"bold"}}> {assetCount} </div>
                <div className='raisevalue' style={{fontSize:"13px"}}> <img src={arrow} alt="" height="12px" />{assetRaise}</div>
             </div>
        </div>
    )
}

function AssetRow({ assetImage ,assetName, assetCount}){
    return(
        <div className='card'>
            <div className='imageandname'>
        <img src={assetImage} alt={assetName} /> 
            <div>
        {assetName}
            </div>

            </div>
            <div className='countvalue'>
        {assetCount}
            </div>
        </div>
    )
}

export default function Dashboard() {
  const {assetInfo } = useAuth();
  if(!assetInfo){
    return(
        <div> <CircularProgress/> <br />
        Loading...</div>
    )
  }
//   console.log(assetInfo.distributedAssets)

  return (
    <div>
      <Navbar/>

      <div className='asset-boxes'>
      <InfoBox assetImage={drive} assetDiscription={"Total Assets"} assetCount={assetInfo.totalAssets} arrow={uparrow} assetRaise={"7.8% this month"}/>
      <InfoBox assetImage={sun} assetDiscription={"Distributed Assets"} assetCount={assetInfo.distributedAssets} arrow={uparrow} assetRaise={"3.4% this month"}/>
      <InfoBox assetImage={hand} assetDiscription={"Available Assets"} assetCount={assetInfo.availableAssets} />
      

      <div className='bigcard'>
        
      <h2>Total Assets</h2>
      <div className='card-header'>
        <div>Categories</div>
        <div>Quantity</div>
      </div>

        <div className='below-header-line'></div>
      <AssetRow assetImage={laptop} assetName={"Laptop"} assetCount={assetInfo.laptopQuantity}/> 
      <AssetRow assetImage={mouse} assetName={"Mouse"} assetCount={assetInfo.mouseQuantity}/>
      <AssetRow assetImage={harddrive} assetName={"Hard Disk"} assetCount={assetInfo.hardDiskQuantity}/>
      <AssetRow assetImage={pendrive} assetName={"Pen Drive"} assetCount={assetInfo.penDriveQuantity}/>
      <AssetRow assetImage={mobile} assetName={"Mobile"} assetCount={assetInfo.mobileQuantity}/>
      <AssetRow assetImage={sim} assetName={"SIM AssetRow"} assetCount={assetInfo.simQuantity}/>

      </div>
      </div>
    </div>
  );
}