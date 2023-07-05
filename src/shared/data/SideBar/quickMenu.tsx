import type { MenuProps } from '../../types';
import getUID from '../../../utils/getUID';

const { IoMdSpeedometer } = await import('react-icons/io');
const { MdDeliveryDining, MdOutlineExplore } = await import('react-icons/md');
const { BsTrophy } = await import('react-icons/bs');

const UIDArr: string[] = getUID(4);

const quickMenu: MenuProps = {
  type: 'menuDiv',
  title: 'QUICK MENU',
  listItems: [
    {
      id: UIDArr[0],
      icon: <IoMdSpeedometer className='icon' />,
      description: 'Dashboard',
    },
    {
      id: UIDArr[1],
      icon: <MdDeliveryDining className='icon' />,
      description: 'My Orders',
    },
    {
      id: UIDArr[2],
      icon: <MdOutlineExplore className='icon' />,
      description: 'Explore',
    },
    {
      id: UIDArr[3],
      icon: <BsTrophy className='icon' />,
      description: 'Products',
    },
  ],
};

export default quickMenu;
