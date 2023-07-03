import type { HeadingProps } from '../../types';
import { BsArrowRightShort } from 'react-icons/bs';

const activityHeading: HeadingProps = {
  title: { text: 'Recent Activity' },
  action: {
    text: 'See All',
    icon: <BsArrowRightShort className='icon' />,
  },
};

export default activityHeading;
