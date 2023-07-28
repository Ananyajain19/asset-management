import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { useAuth } from '../AuthContext';
import search from '../images/search.jpg'
import cross from '../images/cross.png'
import './AssetLists.css'
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react'; 
import plus from '../images/plus.png'


function AssetEntry ({getAsset}) {
  
  return (
    <table className='entries-table'>
      <thead>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Serial Number</th>
          <th>Asset Type</th>
          <th>Date Purchased</th>
          <th>Warranty Start Date</th>
          <th>Warranty Expires</th>
          <th>Assigned To</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {getAsset.map((value) => (
          <tr key={value.id}>
            <td className='asset-make'>{value.brand}</td>
            <td>{value.model}</td>
            <td>{value.serialNo}</td>
            <td className='asset-type'>{value.AssetType}</td>
            <td>{value.purchasedDate}</td>
            <td>{value.warrantyStartDate}</td>
            <td>{value.warrantyExpiryDate}</td>
            <td>{value.assignedTo?value.assignedTo: "Not Assigned"}</td>
            <td>{value.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  
    
    );
}

function BigComponent ({input , setInput ,getAsset}) {
    
     
      
  
  return(
    <div className='Big-component'>

    
    <div className='assets-info-component' >
        <div className='component-search'>
          <img src={search} alt="search" className='search'  style={{height:'18px' , paddingBottom:'6px'}}/>
          <input type="text" value={input} placeholder='Search' style={{height:'22px' , width: '250px', backgroundColor: 'white' , border:'1px solid #fff'}} onChange={(e)=>{setInput(e.target.value)}} className='input' />
          <img src={cross} alt="cross" className = 'cross' style={{height:'18px' ,paddingBottom:'6px' }} onClick={()=>{setInput('')
          
        }} />
        </div>
        <div className='right-header'>
           <div className='check-box'><input type="checkbox" style={{marginBottom:'8px'}}  /> Available</div>
           
            <fieldset>
              <legend>Assets Type</legend>
           <select className='select' >
            <option value="Assets Type" hidden>All</option>
            <option value="Laptop">Laptop</option>
            <option value="Mouse">Mouse</option>
            <option value="Pen Drive">Pen Drive</option>
            <option value="Hard Drive">Hard Drive</option>
            <option value="Mobile">Mobile</option>
            <option value="Sim">Sim Card</option>
           </select>
           </fieldset>
           <fieldset>
           <legend>Assets Type</legend>
           <select name="Warranty" className='select'>
            <option value="Warranty" hidden>All</option>
            <option value="None">None</option>
            <option value="1 month">Expires in 1 month</option>
            <option value="3 months">Expires in 3 months</option>
            <option value="6 months">Expires in 6 months</option>
            <option value="expired">Expired</option>
            
           </select>
           </fieldset>
           <button className='add-button'><img src={plus} alt="plus" />Add Asset</button>
        </div>
      </div>

      {/* <div className='purple-header'>
        <div>Make</div>
        <div>Model</div>
        <div>Serial Number</div>
        <div>Asset Type</div>
        <div>Date Purchased</div>
        <div>Asset Status</div>
        <div>Warranty Expires</div>
        <div>Assigned To</div>
        <div>Action</div>
      </div> */}
      
      <div>
        <AssetEntry getAsset={getAsset} />
      </div>

      </div>
  )
}

const AssetsList = () => {
  // const [input , setInput ] = useState('')
  
    const {getAsset ,input ,setInput} = useAuth()
    console.log(getAsset)
    if(!getAsset){
      return(
          <div> <CircularProgress/> <br />
          Loading...</div>
      )
    }
  return (
    <div>
      <Navbar />
      <div className='main'>
      <BigComponent input = {input} setInput = {setInput} getAsset={getAsset}/>
      </div>
    </div>
  );
};

export default AssetsList;

