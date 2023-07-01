import type { HelpCenterData } from '../types/';
import { BsQuestionCircle } from 'react-icons/bs';

const helpCenter: HelpCenterData = {
  title: 'Help Center',
  description:
    'Having troubles in Planti, please contact us for more questions',
  btnText: 'Go to Help Center',
  icon: <BsQuestionCircle className='icon' />,
};

export default helpCenter;
