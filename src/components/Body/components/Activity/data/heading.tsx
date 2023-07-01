import type { HeadingProps } from '../../Listing/types';
import { BsArrowRightShort } from 'react-icons/bs';

const heading: HeadingProps = {
  title: { text: 'Recent Activity' },
  action: {
    text: 'See All',
    icon: <BsArrowRightShort className='icon' />,
  },
};

export default heading;
