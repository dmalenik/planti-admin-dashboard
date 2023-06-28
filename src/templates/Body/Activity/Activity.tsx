import React from 'react';
import './Activity.scss';

import { BsArrowRightShort } from 'react-icons/bs';

import sunAndPlantsImg from '../../../assets/imgs/pexels-arnie-watkins-3068249.jpg';
import someImg1 from '../../../assets/imgs/pexels-daniel-maldonado-4634361.jpg';
import someImg2 from '../../../assets/imgs/pexels-lina-kivaka-1661572.jpg';

const Activity = (): JSX.Element => {
  return (
    <div className='activitySection'>
      <div className='heading flex'>
        <h1>Recent activity</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon' />
        </button>
      </div>
      <div className='secContainer grid'>
        <div className='singleCustomer flex'>
          <img src={sunAndPlantsImg} alt='Customer Image' />
          <div className='customerDetails'>
            <span className='name'>Sun and Plants</span>
            <small>Ordered a new plant</small>
          </div>
          <p className='duration'>2 min ago</p>
        </div>
        <div className='singleCustomer flex'>
          <img src={someImg1} alt='Customer Image' />
          <div className='customerDetails'>
            <span className='name'>Sun and Plants</span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>2 min ago</div>
        </div>
        <div className='singleCustomer flex'>
          <img src={someImg2} alt='Customer Image' />
          <div className='customerDetails'>
            <span className='name'>Sun and Plants</span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>2 min ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
