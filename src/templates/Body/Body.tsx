import React from 'react';
import './Body.scss';
import Top from './Top/Top';
import Listing from './Listing/Listing';
import Activity from './Activity/Activity';

const Body = () => {
  return (
    <div className='mainContent'>
      <Top />
      <div className='bottom flex'>
        <Listing />
        <Activity />
      </div>
    </div>
  );
};

export default Body;
