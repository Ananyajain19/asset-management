
import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import { useAuth } from '../AuthContext';
import Switch from '@mui/material/Switch';
export default function Form() {
    const {assetType,setAssetType,formData,setFormData,token,setButton,selectedId, editData} = useAuth()
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const [ownedByValue, setOwnedByValue] = useState("");
      // Update the state and react-hook-form's value when select value changes
      const handleOwnedByChange = (e) => {
        setOwnedByValue(e.target.value);
      }
    
      const handleCancel = () => {
        setButton(false);
        setAssetType('none');
        setFormData({});
      };
    
      const onSubmit = (data) => {
        
        const finalData = {
            ...data,
            "AssetType": assetType,
            purchasedDate: data.purchasedDate + 'T00:00:00.000Z',
            warrantyStartDate: data.warrantyStartDate ? data.warrantyStartDate + 'T00:00:00.000Z' : null,
            warrantyExpiryDate: data.warrantyExpiryDate ? data.warrantyExpiryDate + 'T00:00:00.000Z' : null
          };
      
          if (editData) {
            fetch('https://devassetapi.remotestate.com/asset-management/user/asset/', {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': token,
                    },
                    body: JSON.stringify({...finalData,"id":selectedId}),
                  })
                    .then((response) => {
                      if (!response.ok) {
                        throw new Error('Error upadting data');
                      }
                      return response.json();
                    })
                    .then((data) => {
                      console.log('API response:', data);
                    })
                    .catch((error) => {
                      console.error('Error upadting data:', error);
                    });
            
                
                    setButton(false)
                    setFormData({})
                    setAssetType('none')
                
            // // Call handleUpdate if editData is available (Update button is clicked)
            // handleUpdate(finalData);
          } else {
            // Proceed with form submission if editData is not available (Save button is clicked)
            fetch('https://devassetapi.remotestate.com/asset-management/user/asset', {
              method: 'POST',
              headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(finalData),
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
            setButton(false);
            setFormData({});
            setAssetType('none');
          }
      };
      if(assetType==="laptop"){
    return (
        
            
          <form onSubmit={handleSubmit(onSubmit)} className="asset-form">
            
        
                 
                 <div className='data-row'>
                     <div className='owned'>
                 <label>Owned By</label>
                 <select {...register("ownedBy", { required: true }) } defaultValue={editData?editData[0].ownedBy:""} onChange={handleOwnedByChange}  className='select-class'   style={{marginTop:'4px', border: '1px solid #fff' ,}} >
                    <option value=""  hidden></option> 
                    <option value="client">Client</option>
                    <option value="remote_state">RemoteState</option>
                 </select>
                 {errors.ownedBy && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                 </div>
                 {ownedByValue==="client"  &&
                 <div>
                     <label > Client Name</label>
                     <input className='input-class'{...register("clientName", { required: true }) } defaultValue={editData?editData[0].clientName:""}  placeholder='Enter Client name'/>
                     {ownedByValue === "client" && errors.clientName && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                 </div>
                 }
                 </div>
                 <div className='data-row'>
                     <div>
                     <label>Make</label>
                     <input className='input-class' defaultValue={editData?editData[0].brand:""} {...register("brand", { required: true }) }  placeholder='Enter Brand Name' />
                     {errors.brand && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                     <div>
                         
                     <label>Model</label>
                     <input className='input-class' defaultValue={editData?editData[0].model:""}{...register("model", { required: true }) }  placeholder='Enter Model Number' />
                     {errors.model && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                 </div>
                 <div className='data-row'>
                     <div>
                     <label>Serial Number</label>
                     <input className='input-class' defaultValue={editData?editData[0].serialNo:""} {...register("serialNo", { required: true }) } placeholder='Enter Serial Number' />
                     {errors.serialNo && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                     <div>
                     <label>Series</label>
                     <input className='input-class' defaultValue={editData?editData[0].series:""} {...register("series", { required: true }) } placeholder='Enter Series'/>
                     {errors.series && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                 </div>
                 <div className='data-row'>
                     <div>
                     <label>Warranty Start Date</label>
                     <input type="date" defaultValue={editData?editData[0].warrantyStartDate:""} className='input-class' {...register('warrantyStartDate', { required: true }) }  placeholder='mm/dd/yy' />
                     {errors.warrantyStartDate && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                     <div>
                     <label>Warranty Expiry Date</label>
                     <input type="date" className='input-class' defaultValue={editData?editData[0].warrantyExpiryDate:""} {...register('warrantyExpiryDate', { required: true }) }  placeholder='mm/dd/yy'/>
                     {errors.warrantyExpiryDate && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                 </div>
                 <div className='data-row'>
                     <div>
                     <label>RAM</label>
                     <input className='input-class' defaultValue={editData?editData[0].ram:""} {...register("ram", { required: true }) } placeholder='Enter RAM' />
                     {errors.ram && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                     <div>
                     <label>Processor</label>
                     <input className='input-class' defaultValue={editData?editData[0].processor:""} {...register("processor", { required: true }) }  placeholder='Enter Processor'/>
                     {errors.processor && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                 </div>
                 <div className='data-row'>
                     <div>
                     <label>Screen Resolution</label>
                     <input className='input-class' defaultValue={editData?editData[0].screenResolution:""} {...register('screenResolution', { required: true }) } placeholder='Enter Screen Resolution' />
                     {errors.screenResolution && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                     <div>
                     <label>Operating System</label>
                     <input className='input-class' defaultValue={editData?editData[0].operatingSystem:""} {...register('operatingSystem', { required: true }) } placeholder='Enter Processor'/>
                     {errors.operatingSystem && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                 </div>
     
                 <div className='data-row'>
                     <div>
                     <label>Date of Purchase</label>
                     <input className='input-class' defaultValue={editData?editData[0].purchasedDate:""} type="date" {...register('purchasedDate', { required: true }) } placeholder='dd-mm-yy' />
                     {errors.purchasedDate && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                     <div>
                     <label>Charger</label>
                     <div  className='toggle-button'> No <Switch {...register("charger")} /> Yes</div>

                     </div>
                 </div>
            
            <div className="save-cancel">
              <button className="save" type="submit">
                {editData?"Update":"Save"}
              </button>
              <button className="cancel" type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
            
            
            
            </form>

        
      );
}
if(assetType==="mouse"){
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="asset-form">
          <div className='data-row'>
                <div className='owned'>
                <label>Owned By</label>
                 <select {...register("ownedBy", { required: true }) } defaultValue={editData?editData[0].ownedBy:""} onChange={handleOwnedByChange}  className='select-class'   style={{marginTop:'4px', border: '1px solid #fff' ,}} >
                    <option value=""  hidden></option> 
                    <option value="client">Client</option>
                    <option value="remote_state">RemoteState</option>
                 </select>
                 {errors.ownedBy && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                 </div>
                 {ownedByValue==="client"  &&
                 <div>
                     <label > Client Name</label>
                     <input className='input-class'{...register("clientName", { required: true }) } defaultValue={editData?editData[0].clientName:""}  placeholder='Enter Client name'/>
                     {ownedByValue === "client" && errors.clientName && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                 </div>
                 }
            </div>
          <div className='data-row'>
          <div>
                     <label>Make</label>
                     <input className='input-class' defaultValue={editData?editData[0].brand:""} {...register("brand", { required: true }) }  placeholder='Enter Brand Name' />
                     {errors.brand && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                     <div>
                         
                     <label>Model</label>
                     <input className='input-class' defaultValue={editData?editData[0].model:""}{...register("model", { required: true }) }  placeholder='Enter Model Number' />
                     {errors.model && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
          </div>
          <div className='data-row'>
          <div>
                     <label>Serial Number</label>
                     <input className='input-class' defaultValue={editData?editData[0].serialNo:""} {...register("serialNo", { required: true }) } placeholder='Enter Serial Number' />
                     {errors.serialNo && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                     <div>
                     <label>Date of Purchase</label>
                     <input className='input-class' defaultValue={editData?editData[0].purchasedDate:""} type="date" {...register('purchasedDate', { required: true }) } placeholder='dd-mm-yy' />
                     {errors.purchasedDate && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
          </div>
          <div className='data-row'>
          <div>
                     <label>Warranty Start Date</label>
                     <input type="date" defaultValue={editData?editData[0].warrantyStartDate:""} className='input-class' {...register('warrantyStartDate', { required: true }) }  placeholder='mm/dd/yy' />
                     {errors.warrantyStartDate && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                     <div>
                     <label>Warranty Expiry Date</label>
                     <input type="date" className='input-class' defaultValue={editData?editData[0].warrantyExpiryDate:""} {...register('warrantyExpiryDate', { required: true }) }  placeholder='mm/dd/yy'/>
                     {errors.warrantyExpiryDate && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
          </div>
          
          <div className="save-cancel">
              <button className="save" type="submit">
                {editData?"Update":"Save"}
              </button>
              <button className="cancel" type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
      </form>
    )
 }
 if(assetType==="pen drive"){
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="asset-form">
          <div className='data-row'>
                <div className='owned'>
                <label>Owned By</label>
                 <select {...register("ownedBy", { required: true }) } defaultValue={editData?editData[0].ownedBy:""} onChange={handleOwnedByChange}  className='select-class'   style={{marginTop:'4px', border: '1px solid #fff' ,}} >
                    <option value=""  hidden></option> 
                    <option value="client">Client</option>
                    <option value="remote_state">RemoteState</option>
                 </select>
                 {errors.ownedBy && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                 </div>
                 {ownedByValue==="client"  &&
                 <div>
                     <label > Client Name</label>
                     <input className='input-class'{...register("clientName", { required: true }) } defaultValue={editData?editData[0].clientName:""}  placeholder='Enter Client name'/>
                     {ownedByValue === "client" && errors.clientName && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                 </div>
                 }
            </div>
          <div className='data-row'>
          <div>
                     <label>Make</label>
                     <input className='input-class' defaultValue={editData?editData[0].brand:""} {...register("brand", { required: true }) }  placeholder='Enter Brand Name' />
                     {errors.brand && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                     <div>
                         
                     <label>Model</label>
                     <input className='input-class' defaultValue={editData?editData[0].model:""}{...register("model", { required: true }) }  placeholder='Enter Model Number' />
                     {errors.model && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
          </div>
          <div className='data-row'>
          <div>
                     <label>Serial Number</label>
                     <input className='input-class' defaultValue={editData?editData[0].serialNo:""} {...register("serialNo", { required: true }) } placeholder='Enter Serial Number' />
                     {errors.serialNo && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                     <div>
                     <label>Storage</label>
                     <input className='input-class' defaultValue={editData?editData[0].storage:""} {...register("storage", { required: true }) } placeholder='Enter Storage' />
                     {errors.storage && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
          </div>
          <div className='data-row'>
          <div>
                     <label>Warranty Start Date</label>
                     <input type="date" defaultValue={editData?editData[0].warrantyStartDate:""} className='input-class' {...register('warrantyStartDate', { required: true }) }  placeholder='mm/dd/yy' />
                     {errors.warrantyStartDate && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                     <div>
                     <label>Warranty Expiry Date</label>
                     <input type="date" className='input-class' defaultValue={editData?editData[0].warrantyExpiryDate:""} {...register('warrantyExpiryDate', { required: true }) }  placeholder='mm/dd/yy'/>
                     {errors.warrantyExpiryDate && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
          </div>
          
          <div className='data-row'>
          <div style={{display:'flex' , flexDirection:'column'}}>
                     <label>Date of Purchase</label>
                     <input className='input-class' defaultValue={editData?editData[0].purchasedDate:""} type="date" {...register('purchasedDate', { required: true }) } placeholder='dd-mm-yy' />
                     {errors.purchasedDate && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
              
          </div>
          <div className="save-cancel">
              <button className="save" type="submit">
                {editData?"Update":"Save"}
              </button>
              <button className="cancel" type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
      </form>
    )
 }
 if(assetType==="hard disk"){
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="asset-form">
          <div className='data-row'>
                <div className='owned'>
                <label>Owned By</label>
                 <select {...register("ownedBy", { required: true }) } defaultValue={editData?editData[0].ownedBy:""} onChange={handleOwnedByChange}  className='select-class'   style={{marginTop:'4px', border: '1px solid #fff' ,}} >
                    <option value=""  hidden></option> 
                    <option value="client">Client</option>
                    <option value="remote_state">RemoteState</option>
                 </select>
                 {errors.ownedBy && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                 </div>
                 {ownedByValue==="client"  &&
                 <div>
                     <label > Client Name</label>
                     <input className='input-class'{...register("clientName", { required: true }) } defaultValue={editData?editData[0].clientName:""}  placeholder='Enter Client name'/>
                     {ownedByValue === "client" && errors.clientName && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                 </div>
                 }
            </div>
          <div className='data-row'>
          <div>
                     <label>Make</label>
                     <input className='input-class' defaultValue={editData?editData[0].brand:""} {...register("brand", { required: true }) }  placeholder='Enter Brand Name' />
                     {errors.brand && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                     <div>
                         
                     <label>Model</label>
                     <input className='input-class' defaultValue={editData?editData[0].model:""}{...register("model", { required: true }) }  placeholder='Enter Model Number' />
                     {errors.model && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
          </div>
          <div className='data-row'>
          <div>
                     <label>Serial Number</label>
                     <input className='input-class' defaultValue={editData?editData[0].serialNo:""} {...register("serialNo", { required: true }) } placeholder='Enter Serial Number' />
                     {errors.serialNo && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                     <div>
                     <label>Storage</label>
                     <input className='input-class' defaultValue={editData?editData[0].storage:""} {...register("storage", { required: true }) } placeholder='Enter Storage' />
                     {errors.storage && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
          </div>
          <div className='data-row'>
          <div>
                     <label>Warranty Start Date</label>
                     <input type="date" defaultValue={editData?editData[0].warrantyStartDate:""} className='input-class' {...register('warrantyStartDate', { required: true }) }  placeholder='mm/dd/yy' />
                     {errors.warrantyStartDate && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                     <div>
                     <label>Warranty Expiry Date</label>
                     <input type="date" className='input-class' defaultValue={editData?editData[0].warrantyExpiryDate:""} {...register('warrantyExpiryDate', { required: true }) }  placeholder='mm/dd/yy'/>
                     {errors.warrantyExpiryDate && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
          </div>

          <div className='data-row'>
          <div style={{display:'flex' , flexDirection:'column'}}>
                     <label>Date of Purchase</label>
                     <input className='input-class' defaultValue={editData?editData[0].purchasedDate:""} type="date" {...register('purchasedDate', { required: true }) } placeholder='dd-mm-yy' />
                     {errors.purchasedDate && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
              
          </div>
          <div className="save-cancel">
              <button className="save" type="submit">
                {editData?"Update":"Save"}
              </button>
              <button className="cancel" type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
      </form>
    )
 }
 if(assetType==="mobile"){
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="asset-form">
          <div className='data-row'>
                <div className='owned'>
                <label>Owned By</label>
                 <select {...register("ownedBy", { required: true }) } defaultValue={editData?editData[0].ownedBy:""} onChange={handleOwnedByChange}  className='select-class'   style={{marginTop:'4px', border: '1px solid #fff' ,}} >
                    <option value=""  hidden></option> 
                    <option value="client">Client</option>
                    <option value="remote_state">RemoteState</option>
                 </select>
                 {errors.ownedBy && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                 </div>
                 {ownedByValue==="client"  &&
                 <div>
                     <label > Client Name</label>
                     <input className='input-class'{...register("clientName", { required: true }) } defaultValue={editData?editData[0].clientName:""}  placeholder='Enter Client name'/>
                     {ownedByValue === "client" && errors.clientName && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                 </div>
                 }
            </div>
          <div className='data-row'>
          <div>
                     <label>Make</label>
                     <input className='input-class' defaultValue={editData?editData[0].brand:""} {...register("brand", { required: true }) }  placeholder='Enter Brand Name' />
                     {errors.brand && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                     <div>
                         
                     <label>Model</label>
                     <input className='input-class' defaultValue={editData?editData[0].model:""}{...register("model", { required: true }) }  placeholder='Enter Model Number' />
                     {errors.model && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
          </div>
         
          <div className='data-row'>
          <div>
                         
                         <label>RAM</label>
                         <input className='input-class' defaultValue={editData?editData[0].ram:""}{...register("ram", { required: true }) }  placeholder='Enter Model Number' />
                         {errors.ram && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                         </div>
              <div>
              <label>OS Type</label>
              <select placeholder='Enter OS'    className='select-class' defaultValue={editData?editData[0].osType:""} {...register("osType", { required: true }) } style={{border:'1px solid #fff'}}>
                <option value="" hidden disabled></option>
                <option value="Android">Android</option>
                <option value="iOS">iOS</option>
              </select>
              {errors.osType && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
              </div>
          </div>
          <div className='data-row'>
              <div>
              <label>IMEI Number-1</label>
              <input type="text"  defaultValue={editData?editData[0].imeiNumber1:""} {...register("imeiNumber1", { required: true }) }  className='input-class' placeholder='Enter IMEI number' />
              </div>
              <div>
              <label>IMEI Number-1</label>
              <input type="text"  defaultValue={editData?editData[0].imeiNumber2:""} {...register("imeiNumber2", { required: true }) }  className='input-class' placeholder='Enter IMEI number' />
              </div>
          </div>

          <div className='data-row'>
              <div>
              <label>Date of Purchase</label>
                     <input className='input-class' defaultValue={editData?editData[0].purchasedDate:""} type="date" {...register('purchasedDate', { required: true }) } placeholder='dd-mm-yy' />
                     {errors.purchasedDate && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
              </div>
              <div>
                     <label>Serial Number</label>
                     <input className='input-class' defaultValue={editData?editData[0].serialNo:""} {...register("serialNo", { required: true }) } placeholder='Enter Serial Number' />
                     {errors.serialNo && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
          </div>
          <div className='data-row'>
          <div>
                     <label>Warranty Start Date</label>
                     <input type="date" defaultValue={editData?editData[0].warrantyStartDate:""} className='input-class' {...register('warrantyStartDate', { required: true }) }  placeholder='mm/dd/yy' />
                     {errors.warrantyStartDate && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                     <div>
                     <label>Warranty Expiry Date</label>
                     <input type="date" className='input-class' defaultValue={editData?editData[0].warrantyExpiryDate:""} {...register('warrantyExpiryDate', { required: true }) }  placeholder='mm/dd/yy'/>
                     {errors.warrantyExpiryDate && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
          </div>
          <div className="save-cancel">
              <button className="save" type="submit">
                {editData?"Update":"Save"}
              </button>
              <button className="cancel" type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
      </form>
    )
 }
 
 if(assetType==="sim"){
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="asset-form">
          <div className='data-row'>
                <div className='owned'>
                <label>Owned By</label>
                 <select {...register("ownedBy", { required: true }) } defaultValue={editData?editData[0].ownedBy:""} onChange={handleOwnedByChange}  className='select-class'   style={{marginTop:'4px', border: '1px solid #fff' ,}} >
                    <option value=""  hidden></option> 
                    <option value="client">Client</option>
                    <option value="remote_state">RemoteState</option>
                 </select>
                 {errors.ownedBy && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                 </div>
                 {ownedByValue==="client"  &&
                 <div>
                     <label > Client Name</label>
                     <input className='input-class'{...register("clientName", { required: true }) } defaultValue={editData?editData[0].clientName:""}  placeholder='Enter Client name'/>
                     {ownedByValue === "client" && errors.clientName && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                 </div>
                 }
            </div>
          <div className='data-row'>
          <div>
                     <label>Make</label>
                     <input className='input-class' defaultValue={editData?editData[0].brand:""} {...register("brand", { required: true }) }  placeholder='Enter Brand Name' />
                     {errors.brand && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
                     <div>
                         
                     <label>SIM Card Number</label>
                     <input className='input-class' defaultValue={editData?editData[0].simNo:""}{...register("simNo", { required: true }) }  placeholder='Enter SIM Number' />
                     {errors.simNo && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
          </div>
          <div className='data-row'>
          <div>
              <label>Date of Purchase</label>
                     <input className='input-class' defaultValue={editData?editData[0].purchasedDate:""} type="date" {...register('purchasedDate', { required: true }) } placeholder='dd-mm-yy' />
                     {errors.purchasedDate && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
              </div>
              <div>
                     <label>Mobile Number</label>
                     <input className='input-class' defaultValue={editData?editData[0].phoneNo:""} {...register("phoneNo", { required: true }) } placeholder='Enter Mobile Number' />
                     {errors.phoneNo && <div style={{color:"red" , fontSize:"10px"}}>Required</div>}
                     </div>
          </div>
         
          
          <div className="save-cancel">
              <button className="save" type="submit">
                {editData?"Update":"Save"}
              </button>
              <button className="cancel" type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
      </form>
    )
 }

}
