import React from 'react'
import { useAuth } from '../AuthContext';
import cross from '../images/cross.png'
import './EditAsset.css'

export default function DeleteAsset({id,asset}) {
    const {token,showDeleteModal,setShowDeleteModal,selectedId, assetType, setAssetType,actionButton,setActionButton} =useAuth();
    const handleDelete=()=>{
   
    
        const requestBody = {
            "id": selectedId,
            "assetType": assetType
            
        };
        fetch('https://devassetapi.remotestate.com/asset-management/user/asset', {
            method: 'DELETE',
            headers: {
                'Authorization':token,
              'Content-Type': 'application/json',
             
            },
            body: JSON.stringify(requestBody),
          })
            .then((response) => {
              if (response.ok) {
                
                console.log('Data successfully posted to the API.');
              } else {
                
                console.error('Failed to post data to the API.');
              }
            })
            .catch((error) => {
              
              console.error('Error while making the API request:', error);
            });
            setShowDeleteModal(false)
            setAssetType("none")
            setActionButton(false)
        }
  return (
    <div className='delete-asset'>
        <div className='delete-asset-header'>
          <div className='delete-heading' style={{color:'red'}}>Delete</div>
          <img src={cross} alt="cross"  className='cross' onClick={()=>{setShowDeleteModal(false)
          setActionButton(false)
        }} />
        </div>
        <div className='del-asset'>
          <div style={{fontWeight:'bold'}}>Deletion Reason</div>
          <input type="text" />
        </div>
        <button className='modal-delete' onClick={handleDelete}>Confirm</button>
      </div>
  )
}
