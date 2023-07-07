import type { HelpCenterProps } from '../../types';

const { BsQuestionCircle } = await import('react-icons/bs');

const helpCenter: HelpCenterProps = {
  title: 'Help Center',
  description:
    'Having troubles in Planti, please contact us for more questions',
  btnText: 'Go to Help Center',
  icon: <BsQuestionCircle className='icon' />,
};

export default helpCenter;
