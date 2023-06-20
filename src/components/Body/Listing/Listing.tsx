import React from 'react';
import './Listing.scss';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';

import leavesImg from '../../../assets/imgs/pexels-felipe-alves-10616343.jpg';
import palacePlantsImg from '../../../assets/imgs/pexels-maria-orlova-4946907.jpg';
import mointainsViewImg from '../../../assets/imgs/pexels-tim-gouw-5677269.jpg';
import plantsAndWaterfallImg from '../../../assets/imgs/pexels-antonio-friedemann-3890544.jpg';
import flowersAndMountainsImg from '../../../assets/imgs/pexels-dominik-simecek-4807058.jpg';
import someImg2 from '../../../assets/imgs/pexels-madison-inouye-1054024.jpg';

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
      <div className='sellers flex'>
        <div className='topSellers'>
          <div className='heading flex'>
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>
          <div className='card flex'>
            <div className='users'>
              <img src={plantsAndWaterfallImg} alt='Image Name' />
              <img src={flowersAndMountainsImg} alt='Image Name' />
              <img src={someImg2} alt='Image Name' />
            </div>
            <div className='cardText'>
              <span>14.456 Plants sold</span> <br />
              <small>
                21 Sellers <span className='date'>7 Days</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
