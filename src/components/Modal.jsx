import React from 'react'
import { useAuth } from '../AuthContext';
import Switch from '@mui/material/Switch';
import './Modal.css'
export default function  Modal() {
    const {assetType} = useAuth()
   if(assetType==="Laptop"){
      return(
        <div className='asset-form'>
            <div className='data-row'>
                <div>
            <label>Owned By</label>
            <select id="">
               <option value="" hidden disabled></option> 
               <option value="">Client</option>
               <option value="">RemoteState</option>
            </select>
            </div>
            </div>
            <div className='data-row'>
                <div>
                <label>Make</label>
                <input type="text" placeholder='Enter Brand Name' />
                </div>
                <div>
                <label>Model</label>
                <input type="text" placeholder='Enter Model Number' />
                </div>
            </div>
            <div className='data-row'>
                <div>
                <label>Serial Number</label>
                <input type="text" placeholder='Enter Serial Number' />
                </div>
                <div>
                <label>Series</label>
                <input type="text" placeholder='Enter Series'/>
                </div>
            </div>
            <div className='data-row'>
                <div>
                <label>Warranty Start Date</label>
                <input type="date" placeholder='mm/dd/yy' />
                </div>
                <div>
                <label>Warranty Expiry Date</label>
                <input type="date" placeholder='mm/dd/yy'/>
                </div>
            </div>
            <div className='data-row'>
                <div>
                <label>RAM</label>
                <input type="text" placeholder='Enter RAM' />
                </div>
                <div>
                <label>Processor</label>
                <input type="text" placeholder='Enter Processor'/>
                </div>
            </div>
            <div className='data-row'>
                <div>
                <label>Screen Resolution</label>
                <input type="text" placeholder='Enter RAM' />
                </div>
                <div>
                <label>Operating System</label>
                <input type="text" placeholder='Enter Processor'/>
                </div>
            </div>
            <div className='data-row'>
                <div>
                <label>Date Of Purchase</label>
                <input type="date" placeholder='mm/dd/yy' />
                </div>
                <div>
                <label>Charger</label>
                No <Switch/> Yes
                </div>
            </div>
        </div>
      )
   }
}
