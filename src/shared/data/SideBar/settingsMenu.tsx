import type { MenuProps } from '../../types';
import getUID from '../../../utils/getUID';

const { AiOutlinePieChart } = await import('react-icons/ai');
const { BiTrendingUp } = await import('react-icons/bi');
const { MdOutlinePermContactCalendar } = await import('react-icons/md');
const { BsCreditCard2Front } = await import('react-icons/bs');

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
