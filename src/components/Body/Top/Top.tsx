import React from 'react';
import './Top.scss';

import { BiSearchAlt } from 'react-icons/bi';
import { TbMessageCircle } from 'react-icons/tb';
import { IoMdNotificationsOutline } from 'react-icons/io';

import adminImage from '../../../assets/imgs/2019-04-03_IMG_0457_ret_35x45 mm.jpg';

const Top = (): JSX.Element => {
  return (
    <div className='topSection'>
      <div className='headerSection flex'>
        <div className='title'>
          <h1>Welcome to Planti</h1>
          <p>Hello, Dmitriy. Welcome back!</p>
        </div>
        <div className='searchBar flex'>
          <input type='text' name='' id='' placeholder='Search Dashboard' />
          <BiSearchAlt className='icon' />
        </div>
        <div className='adminDiv flex'>
          <TbMessageCircle className='icon' />
          <IoMdNotificationsOutline className='icon' />
          <div className='adminImage'>
            <img src={adminImage} alt='Admin Image' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
