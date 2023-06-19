import React from 'react';
import './Listing.scss';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';

import leavesImg from '../../../assets/imgs/pexels-felipe-alves-10616343.jpg';
import palacePlantsImg from '../../../assets/imgs/pexels-maria-orlova-4946907.jpg';
import mointainsViewImg from '../../../assets/imgs/pexels-tim-gouw-5677269.jpg';

const Listing = (): JSX.Element => {
  return (
    <div className='listingSection'>
      <div className='heading flex'>
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon' />
        </button>
      </div>
      <div className='secContainer flex'>
        <div className='singleItem flex'>
          <AiFillHeart className='icon' />
          <img src={leavesImg} alt='Image Name' />
          <h3>Annual Vince</h3>
        </div>
        <div className='singleItem flex'>
          <AiOutlineHeart className='icon' />
          <img src={palacePlantsImg} alt='Image Name' />
          <h3>Palace and Plants</h3>
        </div>
        <div className='singleItem flex'>
          <AiFillHeart className='icon' />
          <img src={mointainsViewImg} alt='Image Name' />
          <h3>Mountains View</h3>
        </div>
      </div>
    </div>
  );
};

export default Listing;
