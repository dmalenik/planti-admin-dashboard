import type { AdminBarProps } from '../types';
import { BiSearchAlt } from 'react-icons/bi';
import { TbMessageCircle } from 'react-icons/tb';
import { IoMdNotificationsOutline } from 'react-icons/io';
import adminImage from '../assets/2019-04-03_IMG_0457_ret_35x45 mm.jpg';

const adminBar: AdminBarProps = {
  title: {
    heading: 'Welcome to Planti',
    text: 'Hello, Dmitriy. Welcome back!',
  },
  searchBar: {
    icon: <BiSearchAlt className='icon' />,
  },
  adminDiv: {
    icons: [
      <TbMessageCircle className='icon' />,
      <IoMdNotificationsOutline className='icon' />,
    ],
    imgSrc: adminImage,
  },
};

export default adminBar;
