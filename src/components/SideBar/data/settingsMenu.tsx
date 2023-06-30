import type { MenuProps } from '../types/';
import getUID from '../../../utils/getUID';
import { AiOutlinePieChart } from 'react-icons/ai';
import { BiTrendingUp } from 'react-icons/bi';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import { BsCreditCard2Front } from 'react-icons/bs';

const UIDArr: string[] = getUID(4);

const settingsMenu: MenuProps = {
  type: 'settingsDiv',
  title: 'SETTINGS',
  listItems: [
    {
      id: UIDArr[0],
      icon: <AiOutlinePieChart className='icon' />,
      description: 'Charts',
    },
    {
      id: UIDArr[1],
      icon: <BiTrendingUp className='icon' />,
      description: 'Trends',
    },
    {
      id: UIDArr[2],
      icon: <MdOutlinePermContactCalendar className='icon' />,
      description: 'Contact',
    },
    {
      id: UIDArr[3],
      icon: <BsCreditCard2Front className='icon' />,
      description: 'Billing',
    },
  ],
};

export default settingsMenu;
