import { type MenuData, type MenuListItems } from '../types/';
import { AiOutlinePieChart } from 'react-icons/ai';
import { BiTrendingUp } from 'react-icons/bi';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import { BsCreditCard2Front } from 'react-icons/bs';

const settingsMenuData: MenuData<MenuListItems> = {
  title: 'QUICK MENU',
  listItems: [
    { icon: <AiOutlinePieChart className='icon' />, text: 'Charts' },
    { icon: <BiTrendingUp className='icon' />, text: 'Trends' },
    {
      icon: <MdOutlinePermContactCalendar className='icon' />,
      text: 'Contact',
    },
    { icon: <BsCreditCard2Front className='icon' />, text: 'Billing' },
  ],
  styles: 'menuDiv',
};

export default settingsMenuData;
