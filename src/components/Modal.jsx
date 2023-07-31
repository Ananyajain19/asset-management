import React, { useState } from 'react'
import { useAuth } from '../AuthContext';
import Switch from '@mui/material/Switch';
import './Modal.css'
export default function  Modal() {
    
    const {assetType,formData,setFormData,token} = useAuth()
    const handleChange = (event) => {
        const { name, value} = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          "AssetType":assetType,
          [name]: value,
        }));
      };
      console.log(formData);
      const handleSave = () => {
        const requestBody = formData;
        fetch('https://devassetapi.remotestate.com/asset-management/user/asset', {
            method: 'POST',
            headers: {
                'Authorization': `${token}`,
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
      }
   if(assetType==="laptop"){
      return(
        <div className='asset-form'>
            <div className='data-row'>
                <div className='owned'>
            <label>Owned By</label>
            <select className='select-class' name="ownedBy" onChange={handleChange} value={formData.ownedBy} style={{marginTop:'4px', border: '1px solid #fff' ,}} >
               <option value="" disabled hidden></option> 
               <option value="Client">Client</option>
               <option value="Remotestate">RemoteState</option>
            </select>
            </div>
            {formData.ownedBy === 'Client' &&
            <div>
                <label > Client Name</label>
                <input type="text" name='clientName' className='input-class' onChange={handleChange} placeholder='Enter Client name'/>
            </div>
            }
            </div>
            <div className='data-row'>
                <div>
                <label>Make</label>
                <input className='input-class' name='brand' onChange={handleChange}  type="text" placeholder='Enter Brand Name' />
                </div>
                <div>
                    
                <label>Model</label>
                <input type="text" name='model' onChange={handleChange} className='input-class'  placeholder='Enter Model Number' />
                </div>
            </div>
            <div className='data-row'>
                <div>
                <label>Serial Number</label>
                <input type="text" name='serialNo' onChange={handleChange} className='input-class'  placeholder='Enter Serial Number' />
                </div>
                <div>
                <label>Series</label>
                <input type="text" className='input-class' onChange={handleChange} name='series' placeholder='Enter Series'/>
                </div>
            </div>
            <div className='data-row'>
                <div>
                <label>Warranty Start Date</label>
                <input type="date" className='input-class' onChange={handleChange} name='warrantyStartDate' placeholder='mm/dd/yy' />
                </div>
                <div>
                <label>Warranty Expiry Date</label>
                <input type="date" name='warrantyExpiryDate' onChange={handleChange} className='input-class'  placeholder='mm/dd/yy'/>
                </div>
            </div>
            <div className='data-row'>
                <div>
                <label>RAM</label>
                <input type="text" name='ram' onChange={handleChange} className='input-class' placeholder='Enter RAM' />
                </div>
                <div>
                <label>Processor</label>
                <input type="text" name='processor' onChange={handleChange} className='input-class'  placeholder='Enter Processor'/>
                </div>
            </div>
            <div className='data-row'>
                <div>
                <label>Screen Resolution</label>
                <input type="text" onChange={handleChange} name='screenResolution' className='input-class' placeholder='Enter RAM' />
                </div>
                <div>
                <label>Operating System</label>
                <input type="text" className='input-class' onChange={handleChange} name='operatingSystem' placeholder='Enter Processor'/>
                </div>
            </div>

            <div className='data-row'>
                <div>
                <label>Date of Purchase</label>
                <input type="date" name='purchasedDate' className='input-class' onChange={handleChange}  placeholder='dd-mm-yy' />
                </div>
                <div>
                <label>Charger</label>
                <div className='toggle-button'>No <Switch name='charger'onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.checked})}/> Yes</div>
                </div>
            </div>
            <div className='save-cancel'>
                <button className='save' onClick={handleSave}>Save</button>
                <button className='cancel'>Cancel</button>
            </div>
        </div>
      )
   }
   if(assetType==="mouse"){
    return(
      <div className='asset-form'>
          <div className='data-row'>
                <div className='owned'>
            <label>Owned By</label>
            <select className='select-class' name='ownedBy' value={formData.ownedBy} id="" style={{marginTop:'4px', border: '1px solid #fff' ,}} onChange={handleChange} >
               <option value="" disabled hidden></option> 
               <option value="Client">Client</option>
               <option value="Remotestate">RemoteState</option>
            </select>
            </div>
            {formData.ownedBy === 'Client'&&
            <div>
                <label > Client Name</label>
                <input type="text" onChange={handleChange} name='clientName' className='input-class'placeholder='Enter Client name'/>
            </div>
            }
            </div>
          <div className='data-row'>
              <div>
              <label>Make</label>
              <input className='input-class' onChange={handleChange} type="text" placeholder='Enter Brand Name' />
              </div>
              <div>
              <label>Model</label>
              <input type="text" className='input-class' onChange={handleChange}  placeholder='Enter Model Number' />
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>Serial Number</label>
              <input type="text" className='input-class' onChange={handleChange}  placeholder='Enter Serial Number' />
              </div>
              <div>
              <label>Date of Purchase</label>
              <input type="date" className='input-class' onChange={handleChange}  placeholder='dd-mm-yy' />
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>Warranty Start Date</label>
              <input type="date" onChange={handleChange} className='input-class'  placeholder='mm/dd/yy' />
              </div>
              <div>
              <label>Warranty Expiry Date</label>
              <input type="date" onChange={handleChange} className='input-class'  placeholder='mm/dd/yy'/>
              </div>
          </div>
          
          <div className='save-cancel'>
              <button className='save'>Save</button>
              <button className='cancel'>Cancel</button>
          </div>
      </div>
    )
 }
 if(assetType==="pen drive"){
    return(
      <div className='asset-form'>
          <div className='data-row'>
                <div className='owned'>
            <label>Owned By</label>
            <select className='select-class' name='ownedBy' value={formData.ownedBy} id="" style={{marginTop:'4px', border: '1px solid #fff' ,}} onChange={handleChange} >
               <option value="" disabled hidden></option> 
               <option value="Client">Client</option>
               <option value="Remotestate">RemoteState</option>
            </select>
            </div>
            {formData.ownedBy === 'Client'&&
            <div>
                <label > Client Name</label>
                <input type="text" onChange={handleChange} className='input-class'placeholder='Enter Client name'/>
            </div>
            }
            </div>
          <div className='data-row'>
              <div>
              <label>Make</label>
              <input className='input-class' onChange={handleChange} type="text" placeholder='Enter Brand Name' />
              </div>
              <div>
              <label>Model</label>
              <input type="text" onChange={handleChange} className='input-class'  placeholder='Enter Model Number' />
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>Serial Number</label>
              <input type="text" className='input-class' onChange={handleChange}  placeholder='Enter Serial Number' />
              </div>
              <div>
              <label>Storage</label>
              <input type="text" className='input-class' onChange={handleChange}  placeholder='Enter Storage'/>
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>Warranty Start Date</label>
              <input type="date" className='input-class' onChange={handleChange} placeholder='mm/dd/yy' />
              </div>
              <div>
              <label>Warranty Expiry Date</label>
              <input type="date" className='input-class' onChange={handleChange}  placeholder='mm/dd/yy'/>
              </div>
          </div>
          
          <div className='data-row'>
              <div style={{display:'flex' , flexDirection:'column'}}>
              <label>Date of Purchase</label>
              <input type="date" className='input-class' onChange={handleChange}  placeholder='dd-mm-yy' />
              </div>
              
          </div>
          <div className='save-cancel'>
              <button className='save'>Save</button>
              <button className='cancel'>Cancel</button>
          </div>
      </div>
    )
 }

 if(assetType==="hard disk"){
    return(
      <div className='asset-form'>
          <div className='data-row'>
                <div className='owned'>
            <label>Owned By</label>
            <select className='select-class' name='ownedBy' value={formData.ownedBy} id="" style={{marginTop:'4px', border: '1px solid #fff' ,}} onChange={handleChange} >
               <option value="" disabled hidden></option> 
               <option value="Client">Client</option>
               <option value="Remotestate">RemoteState</option>
            </select>
            </div>
            {formData.ownedBy === 'Client'&&
            <div>
                <label > Client Name</label>
                <input type="text" onChange={handleChange} className='input-class'placeholder='Enter Client name'/>
            </div>
            }
            </div>
          <div className='data-row'>
              <div>
              <label>Make</label>
              <input className='input-class' onChange={handleChange} type="text" placeholder='Enter Brand Name' />
              </div>
              <div>
              <label>Model</label>
              <input type="text" className='input-class' onChange={handleChange} placeholder='Enter Model Number' />
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>Serial Number</label>
              <input type="text" className='input-class' onChange={handleChange}  placeholder='Enter Serial Number' />
              </div>
              <div>
              <label>Storage</label>
              <input type="text" className='input-class' onChange={handleChange}  placeholder='Enter Storage'/>
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>Warranty Start Date</label>
              <input type="date" className='input-class' onChange={handleChange}  placeholder='mm/dd/yy' />
              </div>
              <div>
              <label>Warranty Expiry Date</label>
              <input type="date" className='input-class' onChange={handleChange} placeholder='mm/dd/yy'/>
              </div>
          </div>

          <div className='data-row'>
              <div style={{display:'flex' , flexDirection:'column'}}>
              <label>Date of Purchase</label>
              <input type="date" className='input-class' onChange={handleChange} placeholder='dd-mm-yy' />
              </div>
              
          </div>
          <div className='save-cancel'>
              <button className='save'>Save</button>
              <button className='cancel'>Cancel</button>
          </div>
      </div>
    )
 }
 if(assetType==="mobile"){
    return(
      <div className='asset-form'>
          <div className='data-row'>
                <div className='owned'>
            <label>Owned By</label>
            <select className='select-class' name='ownedBy' value={formData.ownedBy} id="" style={{marginTop:'4px', border: '1px solid #fff' ,}} onChange={handleChange} >
               <option value="" disabled hidden></option> 
               <option value="Client">Client</option>
               <option value="Remotestate">RemoteState</option>
            </select>
            </div>
            {formData.ownedBy === 'Client'&&
            <div>
                <label > Client Name</label>
                <input type="text" onChange={handleChange} className='input-class'placeholder='Enter Client name'/>
            </div>
            }
            </div>
          <div className='data-row'>
              <div>
              <label>Make</label>
              <input className='input-class' onChange={handleChange}type="text" placeholder='Enter Brand Name' />
              </div>
              <div>
              <label>Model</label>
              <input type="text" onChange={handleChange} className='input-class'  placeholder='Enter Model Number' />
              </div>
          </div>
         
          <div className='data-row'>
              <div>
              <label>RAM</label>
              <input type="text" onChange={handleChange}  className='input-class' placeholder='Enter RAM' />
              </div>
              <div>
              <label>OS Type</label>
              <select name="" onChange={handleChange} className='select-class' id="" style={{border:'1px solid #fff'}}>
                <option value="" hidden disabled></option>
                <option value="Android">Android</option>
                <option value="iOS">iOS</option>
              </select>
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>IMEI Number-1</label>
              <input type="text" onChange={handleChange}className='input-class' placeholder='Enter IMEI number' />
              </div>
              <div>
              <label>IMEI Number-2</label>
              <input type="text" onChange={handleChange} className='input-class'  placeholder='Enter IMEI number'/>
              </div>
          </div>

          <div className='data-row'>
              <div>
              <label>Date of Purchase</label>
              <input type="date" className='input-class' onChange={handleChange} placeholder='dd-mm-yy' />
              </div>
              <div>
              <label>Serial Number</label>
              <input type="text" className='input-class' onChange={handleChange} placeholder='Enter Serial Number' />
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>Warranty Start Date</label>
              <input type="date" className='input-class' onChange={handleChange}  placeholder='mm/dd/yy' />
              </div>
              <div>
              <label>Warranty Expiry Date</label>
              <input type="date" className='input-class' onChange={handleChange} placeholder='mm/dd/yy'/>
              </div>
          </div>
          <div className='save-cancel'>
              <button className='save'>Save</button>
              <button className='cancel'>Cancel</button>
          </div>
      </div>
    )
 }
 
 if(assetType==="sim card"){
    return(
      <div className='asset-form'>
          <div className='data-row'>
                <div className='owned'>
            <label>Owned By</label>
            <select className='select-class' name='ownedBy' value={formData.ownedBy} id="" style={{marginTop:'4px', border: '1px solid #fff' ,}} onChange={handleChange} >
               <option value="" disabled hidden></option> 
               <option value="Client">Client</option>
               <option value="Remotestate">RemoteState</option>
            </select>
            </div>
            {formData.ownedBy === 'Client'&&
            <div>
                <label > Client Name</label>
                <input type="text" onChange={handleChange} className='input-class'placeholder='Enter Client name'/>
            </div>
            }
            </div>
          <div className='data-row'>
              <div>
              <label>Make</label>
              <input className='input-class' onChange={handleChange} type="text" placeholder='Enter Brand Name' />
              </div>
              <div>
              <label>SIM Card Number</label>
              <input type="text" className='input-class' onChange={handleChange} placeholder='Enter Sim Number' />
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>Mobile Number</label>
              <input type="text" className='input-class' onChange={handleChange}  placeholder='Enter Serial Number' />
              </div>
              <div>
              <label>Date of Purchase</label>
              <input type="date" className='input-class' onChange={handleChange}  placeholder='dd-mm-yy' />
              </div>
          </div>
          
          <div className='save-cancel'>
              <button className='save'>Save</button>
              <button className='cancel'>Cancel</button>
          </div>
      </div>
    )
 }
}
