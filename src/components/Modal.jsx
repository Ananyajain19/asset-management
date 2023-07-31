import React, { useState } from 'react'
import { useAuth } from '../AuthContext';
import Switch from '@mui/material/Switch';
import './Modal.css'
export default function  Modal() {
    const [selectedClient , setSelectedClient] =useState('')
    const {assetType} = useAuth()
   if(assetType==="Laptop"){
      return(
        <div className='asset-form'>
            <div className='data-row'>
                <div className='owned'>
            <label>Owned By</label>
            <select className='select-class' value={selectedClient} id="" style={{marginTop:'4px', border: '1px solid #fff' ,}} onChange={(e)=>{setSelectedClient(e.target.value)
            
            }} >
               <option value="" disabled hidden></option> 
               <option value="Client">Client</option>
               <option value="Remotestate">RemoteState</option>
            </select>
            </div>
            {selectedClient=== 'Client'&&
            <div>
                <label > Client Name</label>
                <input type="text" className='input-class'placeholder='Enter Client name'/>
            </div>
            }
            </div>
            <div className='data-row'>
                <div>
                <label>Make</label>
                <input className='input-class' type="text" placeholder='Enter Brand Name' />
                </div>
                <div>
                    
                <label>Model</label>
                <input type="text" className='input-class'  placeholder='Enter Model Number' />
                </div>
            </div>
            <div className='data-row'>
                <div>
                <label>Serial Number</label>
                <input type="text" className='input-class'  placeholder='Enter Serial Number' />
                </div>
                <div>
                <label>Series</label>
                <input type="text" className='input-class'  placeholder='Enter Series'/>
                </div>
            </div>
            <div className='data-row'>
                <div>
                <label>Warranty Start Date</label>
                <input type="date" className='input-class'  placeholder='mm/dd/yy' />
                </div>
                <div>
                <label>Warranty Expiry Date</label>
                <input type="date" className='input-class'  placeholder='mm/dd/yy'/>
                </div>
            </div>
            <div className='data-row'>
                <div>
                <label>RAM</label>
                <input type="text"  className='input-class' placeholder='Enter RAM' />
                </div>
                <div>
                <label>Processor</label>
                <input type="text" className='input-class'  placeholder='Enter Processor'/>
                </div>
            </div>
            <div className='data-row'>
                <div>
                <label>Screen Resolution</label>
                <input type="text" className='input-class' placeholder='Enter RAM' />
                </div>
                <div>
                <label>Operating System</label>
                <input type="text" className='input-class'  placeholder='Enter Processor'/>
                </div>
            </div>

            <div className='data-row'>
                <div>
                <label>Date of Purchase</label>
                <input type="date" className='input-class'  placeholder='dd-mm-yy' />
                </div>
                <div>
                <label>Charger</label>
                <div className='toggle-button'>No <Switch/> Yes</div>
                </div>
            </div>
            <div className='save-cancel'>
                <button className='save'>Save</button>
                <button className='cancel'>Cancel</button>
            </div>
        </div>
      )
   }
   if(assetType==="Mouse"){
    return(
      <div className='asset-form'>
          <div className='data-row'>
                <div className='owned'>
            <label>Owned By</label>
            <select className='select-class' value={selectedClient} id="" style={{marginTop:'4px', border: '1px solid #fff' ,}} onChange={(e)=>setSelectedClient(e.target.value)} >
               <option value="" disabled hidden></option> 
               <option value="Client">Client</option>
               <option value="Remotestate">RemoteState</option>
            </select>
            </div>
            {selectedClient=== 'Client'&&
            <div>
                <label > Client Name</label>
                <input type="text" className='input-class'placeholder='Enter Client name'/>
            </div>
            }
            </div>
          <div className='data-row'>
              <div>
              <label>Make</label>
              <input className='input-class' type="text" placeholder='Enter Brand Name' />
              </div>
              <div>
              <label>Model</label>
              <input type="text" className='input-class'  placeholder='Enter Model Number' />
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>Serial Number</label>
              <input type="text" className='input-class'  placeholder='Enter Serial Number' />
              </div>
              <div>
              <label>Date of Purchase</label>
              <input type="date" className='input-class'  placeholder='dd-mm-yy' />
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>Warranty Start Date</label>
              <input type="date" className='input-class'  placeholder='mm/dd/yy' />
              </div>
              <div>
              <label>Warranty Expiry Date</label>
              <input type="date" className='input-class'  placeholder='mm/dd/yy'/>
              </div>
          </div>
          
          <div className='save-cancel'>
              <button className='save'>Save</button>
              <button className='cancel'>Cancel</button>
          </div>
      </div>
    )
 }
 if(assetType==="Pen Drive"){
    return(
      <div className='asset-form'>
          <div className='data-row'>
                <div className='owned'>
            <label>Owned By</label>
            <select className='select-class' value={selectedClient} id="" style={{marginTop:'4px', border: '1px solid #fff' ,}} onChange={(e)=>setSelectedClient(e.target.value)} >
               <option value="" disabled hidden></option> 
               <option value="Client">Client</option>
               <option value="Remotestate">RemoteState</option>
            </select>
            </div>
            {selectedClient=== 'Client'&&
            <div>
                <label > Client Name</label>
                <input type="text" className='input-class'placeholder='Enter Client name'/>
            </div>
            }
            </div>
          <div className='data-row'>
              <div>
              <label>Make</label>
              <input className='input-class' type="text" placeholder='Enter Brand Name' />
              </div>
              <div>
              <label>Model</label>
              <input type="text" className='input-class'  placeholder='Enter Model Number' />
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>Serial Number</label>
              <input type="text" className='input-class'  placeholder='Enter Serial Number' />
              </div>
              <div>
              <label>Storage</label>
              <input type="text" className='input-class'  placeholder='Enter Storage'/>
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>Warranty Start Date</label>
              <input type="date" className='input-class'  placeholder='mm/dd/yy' />
              </div>
              <div>
              <label>Warranty Expiry Date</label>
              <input type="date" className='input-class'  placeholder='mm/dd/yy'/>
              </div>
          </div>
          
          <div className='data-row'>
              <div style={{display:'flex' , flexDirection:'column'}}>
              <label>Date of Purchase</label>
              <input type="date" className='input-class'  placeholder='dd-mm-yy' />
              </div>
              
          </div>
          <div className='save-cancel'>
              <button className='save'>Save</button>
              <button className='cancel'>Cancel</button>
          </div>
      </div>
    )
 }

 if(assetType==="Hard Drive"){
    return(
      <div className='asset-form'>
          <div className='data-row'>
                <div className='owned'>
            <label>Owned By</label>
            <select className='select-class' value={selectedClient} id="" style={{marginTop:'4px', border: '1px solid #fff' ,}} onChange={(e)=>setSelectedClient(e.target.value)} >
               <option value="" disabled hidden></option> 
               <option value="Client">Client</option>
               <option value="Remotestate">RemoteState</option>
            </select>
            </div>
            {selectedClient=== 'Client'&&
            <div>
                <label > Client Name</label>
                <input type="text" className='input-class'placeholder='Enter Client name'/>
            </div>
            }
            </div>
          <div className='data-row'>
              <div>
              <label>Make</label>
              <input className='input-class' type="text" placeholder='Enter Brand Name' />
              </div>
              <div>
              <label>Model</label>
              <input type="text" className='input-class'  placeholder='Enter Model Number' />
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>Serial Number</label>
              <input type="text" className='input-class'  placeholder='Enter Serial Number' />
              </div>
              <div>
              <label>Storage</label>
              <input type="text" className='input-class'  placeholder='Enter Storage'/>
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>Warranty Start Date</label>
              <input type="date" className='input-class'  placeholder='mm/dd/yy' />
              </div>
              <div>
              <label>Warranty Expiry Date</label>
              <input type="date" className='input-class'  placeholder='mm/dd/yy'/>
              </div>
          </div>

          <div className='data-row'>
              <div style={{display:'flex' , flexDirection:'column'}}>
              <label>Date of Purchase</label>
              <input type="date" className='input-class'  placeholder='dd-mm-yy' />
              </div>
              
          </div>
          <div className='save-cancel'>
              <button className='save'>Save</button>
              <button className='cancel'>Cancel</button>
          </div>
      </div>
    )
 }
 if(assetType==="Mobile"){
    return(
      <div className='asset-form'>
          <div className='data-row'>
                <div className='owned'>
            <label>Owned By</label>
            <select className='select-class' value={selectedClient} id="" style={{marginTop:'4px', border: '1px solid #fff' ,}} onChange={(e)=>setSelectedClient(e.target.value)} >
               <option value="" disabled hidden></option> 
               <option value="Client">Client</option>
               <option value="Remotestate">RemoteState</option>
            </select>
            </div>
            {selectedClient=== 'Client'&&
            <div>
                <label > Client Name</label>
                <input type="text" className='input-class'placeholder='Enter Client name'/>
            </div>
            }
            </div>
          <div className='data-row'>
              <div>
              <label>Make</label>
              <input className='input-class' type="text" placeholder='Enter Brand Name' />
              </div>
              <div>
              <label>Model</label>
              <input type="text" className='input-class'  placeholder='Enter Model Number' />
              </div>
          </div>
         
          <div className='data-row'>
              <div>
              <label>RAM</label>
              <input type="text"  className='input-class' placeholder='Enter RAM' />
              </div>
              <div>
              <label>OS Type</label>
              <select name="" className='select-class' id="" style={{border:'1px solid #fff'}}>
                <option value="" hidden disabled></option>
                <option value="Android">Android</option>
                <option value="iOS">iOS</option>
              </select>
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>IMEI Number-1</label>
              <input type="text" className='input-class' placeholder='Enter IMEI number' />
              </div>
              <div>
              <label>IMEI Number-2</label>
              <input type="text" className='input-class'  placeholder='Enter IMEI number'/>
              </div>
          </div>

          <div className='data-row'>
              <div>
              <label>Date of Purchase</label>
              <input type="date" className='input-class'  placeholder='dd-mm-yy' />
              </div>
              <div>
              <label>Serial Number</label>
              <input type="text" className='input-class' placeholder='Enter Serial Number' />
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>Warranty Start Date</label>
              <input type="date" className='input-class'  placeholder='mm/dd/yy' />
              </div>
              <div>
              <label>Warranty Expiry Date</label>
              <input type="date" className='input-class'  placeholder='mm/dd/yy'/>
              </div>
          </div>
          <div className='save-cancel'>
              <button className='save'>Save</button>
              <button className='cancel'>Cancel</button>
          </div>
      </div>
    )
 }
 
 if(assetType==="Sim"){
    return(
      <div className='asset-form'>
          <div className='data-row'>
                <div className='owned'>
            <label>Owned By</label>
            <select className='select-class' value={selectedClient} id="" style={{marginTop:'4px', border: '1px solid #fff' ,}} onChange={(e)=>setSelectedClient(e.target.value)} >
               <option value="" disabled hidden></option> 
               <option value="Client">Client</option>
               <option value="Remotestate">RemoteState</option>
            </select>
            </div>
            {selectedClient=== 'Client'&&
            <div>
                <label > Client Name</label>
                <input type="text" className='input-class'placeholder='Enter Client name'/>
            </div>
            }
            </div>
          <div className='data-row'>
              <div>
              <label>Make</label>
              <input className='input-class' type="text" placeholder='Enter Brand Name' />
              </div>
              <div>
              <label>SIM Card Number</label>
              <input type="text" className='input-class'  placeholder='Enter Sim Number' />
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>Mobile Number</label>
              <input type="text" className='input-class'  placeholder='Enter Serial Number' />
              </div>
              <div>
              <label>Date of Purchase</label>
              <input type="date" className='input-class'  placeholder='dd-mm-yy' />
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
