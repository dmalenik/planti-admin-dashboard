import type { AdminBarProps } from '../../types';
import getUID from '../../../utils/getUID';
import { BiSearchAlt } from 'react-icons/bi';
import { TbMessageCircle } from 'react-icons/tb';
import { IoMdNotificationsOutline } from 'react-icons/io';
import adminImage from '../../assets/images/webp-42/adminbar-admin.webp';

const UIDArr: string[] = getUID(2);

const adminBar: AdminBarProps = {
  title: {
    heading: 'Welcome to Planti',
    description: 'Hello, Dmitriy. Welcome back!',
  },
  searchBar: {
    type: 'text',
    id: 'SearchBar',
    name: 'SearchBar',
    icon: <BiSearchAlt className='icon' />,
  },
  adminDiv: {
    icons: [
      <TbMessageCircle className='icon' key={UIDArr[0]} />,
      <IoMdNotificationsOutline className='icon' key={UIDArr[1]} />,
    ],
    img: { src: adminImage, alt: 'Admin Image' },
  },
};

export default adminBar;
