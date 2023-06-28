import { type MenuData, type MenuListItems } from '../types/';
import { IoMdSpeedometer } from 'react-icons/io';
import { MdDeliveryDining, MdOutlineExplore } from 'react-icons/md';
import { BsTrophy } from 'react-icons/bs';

const quickMenuData: MenuData<MenuListItems> = {
  title: 'QUICK MENU',
  listItems: [
    { icon: <IoMdSpeedometer className='icon' />, text: 'Dashboard' },
    { icon: <MdDeliveryDining className='icon' />, text: 'My Orders' },
    { icon: <MdOutlineExplore className='icon' />, text: 'Explore' },
    { icon: <BsTrophy className='icon' />, text: 'Products' },
  ],
  styles: 'menuDiv',
};

export default quickMenuData;
