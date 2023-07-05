import type { AdminBarProps } from '../../types';
import getUID from '../../../utils/getUID';
import adminImage from '../../assets/images/webp-42/adminbar-admin.webp';

const { BiSearchAlt } = await import('react-icons/bi');
const { TbMessageCircle } = await import('react-icons/tb');
const { IoMdNotificationsOutline } = await import('react-icons/io');

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
