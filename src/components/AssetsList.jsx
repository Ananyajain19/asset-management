import React from 'react';
import { BiSearch } from 'react-icons/bi';
import Navbar from './Navbar';
import { useAuth } from '../AuthContext';
import {RxCross2} from 'react-icons/rx'
const AssetsList = () => {
    const {getAsset} = useAuth()
   
  return (
    <div>
      <Navbar />
      <div className='assets-info-component' style={{ paddingTop: '80px' }}>
        <div className='component-header'>
          <BiSearch/>
          <input type="text" placeholder='Search' />
          <RxCross2/>
        </div>
      </div>
    </div>
  );
};

export default AssetsList;

