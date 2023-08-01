import React, { useState } from 'react';
import Navbar from './Navbar';
import { useAuth } from '../AuthContext';
import search from '../images/search.jpg'
import cross from '../images/cross.png'
import './AssetLists.css'
import CircularProgress from '@mui/material/CircularProgress';
import plus from '../images/plus.png'
import Modal from './Modal';
import ToggleButton from '@mui/material/ToggleButton';
import edit from '../images/Edit.png'
import del from '../images/Delete.png'
import DeleteAsset from './EditAsset';


 function AddAsset({setButton,assetType,setAssetType}){
  
    return(
      <div className='new-asset'>
        <div className='new-asset-header'>
          <div className='heading'>Asset Details</div>
          <img src={cross} alt="cross" onClick={()=>{setButton(false)
          setAssetType('none')}} className='cross' />
        </div>
        <div className='assign-asset'>
          <div style={{fontWeight:'bold'}}>Assign Asset</div>
          <select className='select-asset' value={assetType} style={{height:'40px' , width:'300px' ,backgroundColor:'#dce6f9'}} onChange={(e)=>
          {setAssetType(e.target.value)
            // setOptions(true)
          }}>
            <option value="none" >None</option>
            <option value="laptop">Laptop</option>
            <option value="mouse">Mouse</option>
            <option value="pen drive">Pen Drive</option>
            <option value="hard disk">Hard Drive</option>
            <option value="mobile">Mobile</option>
            <option value="sim" >Sim Card</option>
           </select>
        </div>
        <Modal/>
      </div>
    )
 }

 function ActionMenu({ id, asset ,showDeleteModal,setShowDeleteModal}) {
  

  const handleDeleteClick = () => {
    if(showDeleteModal){
    setShowDeleteModal(false);
    }
    else{
      setShowDeleteModal(true);
    }
  };

  return (
    <div className='action-dropdown'>
      <div className='edit-option'>
        <img src={edit} alt="edit" style={{ height: '20px' }} />
        <div>Edit </div>
      </div>
      <div className='delete-option'>
        <img src={del} alt="delete" style={{ height: '20px' }} />
        <div onClick={handleDeleteClick}>Delete</div>
      </div>
    </div>
  );
}

function AssetEntry ({getAsset,actionButton,setActionButton,actionDropdown,setActionDropdown,selectedId,setSelectedId,showDeleteModal,setShowDeleteModal}) {
  function handleAction(index) {
    setActionDropdown((prevIndex) => (prevIndex === index ? -1 : index));
    setActionButton(prev => prev === index ? !actionButton : true);
  }
     const {setAssetType}=useAuth();
  return (
    <div className='asset-entry-container'>
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
          <th>Action </th>
        </tr>
      </thead>
      <tbody>
        {getAsset.map((value,index) => (
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
            <td className='toggle-action'>{actionButton && actionDropdown === index && <ActionMenu id= {value.id} asset={value.AssetType} showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal}/>}<ToggleButton style={{height:'20px', width:'15px',textAlign:'center'}} onClick={() => {handleAction(index)
            setSelectedId(value.id)
            setAssetType(value.AssetType)
            }}>...</ToggleButton></td>
            
            
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
    );
}

function BigComponent ({input , setInput ,getAsset ,checked,setChecked,button , setButton,actionButton,setActionButton,actionDropdown,setActionDropdown,selectedId,setSelectedId,showDeleteModal,setShowDeleteModal}) {
    
  const handleClick = () => {
    if (button) {
      setButton(false)
    } else {
      setButton(true);
    }
  };
      
  
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
           <div className='check-box'><input type="checkbox" value = {checked}style={{marginBottom:'8px'}} onChange={(e)=>{setChecked(e.target.checked)}} /> Available</div>
           
            <fieldset>
              <legend>Assets Type</legend>
           <select className='select-type' >
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
           <select name="Warranty" className='select-type'>
            <option value="Warranty" hidden>All</option>
            <option value="None">None</option>
            <option value="1 month">Expires in 1 month</option>
            <option value="3 months">Expires in 3 months</option>
            <option value="6 months">Expires in 6 months</option>
            <option value="expired">Expired</option>
            
           </select>
           </fieldset>
           <button className='add-button' onClick={handleClick}><img src={plus} alt="plus"   />Add Asset</button>
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
        <AssetEntry getAsset={getAsset} actionDropdown={actionDropdown} setActionDropdown={setActionDropdown} actionButton={actionButton} setActionButton={setActionButton} selectedId={selectedId} setSelectedId={setSelectedId} showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal}/>
       
      </div>

      </div>
  )
}

const AssetsList = () => {
  // const [input , setInput ] = useState('')
  const [actionDropdown , setActionDropdown]= useState(-1);
    const {getAsset ,input ,setInput ,checked , setChecked,button,setButton,assetType,setAssetType,actionButton,setActionButton,selectedId,setSelectedId,showDeleteModal,setShowDeleteModal} = useAuth()
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
      <BigComponent input = {input} setInput = {setInput} getAsset={getAsset} checked={checked} setChecked={setChecked} button={button} setButton={setButton} actionButton={actionButton} setActionButton={setActionButton} actionDropdown={actionDropdown} setActionDropdown={setActionDropdown} selectedId={selectedId} setSelectedId={setSelectedId} showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal}/>
      </div>
      <div className='modal'>
      {button && <AddAsset setButton={setButton} assetType={assetType} setAssetType={setAssetType} actionButton={actionButton} setActionButton={setActionButton}  />}
      </div>
      <div style={{zIndex:'12'}}>
      {showDeleteModal && <DeleteAsset />}
      </div>
    </div>
  );
};

export default AssetsList;

