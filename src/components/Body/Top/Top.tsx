import './Top.scss';

import { BiSearchAlt } from 'react-icons/bi';
import { TbMessageCircle } from 'react-icons/tb';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs';

import adminImage from '../../../assets/imgs/2019-04-03_IMG_0457_ret_35x45 mm.jpg';
import flowerImage from '../../../assets/imgs/pexels-gursharndeep-singh-1261016.jpg';

import rainyVideo from '../../../assets/videos/pexels-maksim-romashkin-12717007-3840x2160-25fps.mp4';

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
      <div className='cardSection flex'>
        <div className='leftCard flex'>
          <h1>Create and sell extraordinary products</h1>
          <p>
            The world's fast growing industry today are natural made products
          </p>
          <div className='buttons flex'>
            <button className='btn'>Exlore More</button>
            <button className='btn transparent'>Top Sellers</button>
          </div>
          <div className='videoDiv'>
            <video src={rainyVideo} autoPlay loop muted></video>
          </div>
        </div>
        <div className='rightCard flex'>
          <div className='main flex'>
            <div className='textDiv'>
              <h1>My Stats</h1>
              <div className='flex'>
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>
                <span>
                  This Month <br />
                  <small>127 Orders</small>
                </span>
              </div>
              <span className='flex link'>
                Go to my orders <BsArrowRightShort className='icon' />
              </span>
            </div>
            <div className='imageDiv'>
              <img src={flowerImage} alt='Image Name' />
            </div>
          </div>
          <div className='sideBarCard'>
            <BsQuestionCircle className='icon' />
            <div className='cardContent'>
              <div className='circle1'></div>
              <div className='circle2'></div>
              <h3>Help Center</h3>
              <p>
                Having troubles in Planti, please contact us for more questions
              </p>
              <button className='btn'>Go to Help Center</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
