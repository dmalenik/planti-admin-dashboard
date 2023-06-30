import type { HeadingProps } from '../types';
import { BsArrowRightShort } from 'react-icons/bs';

const heading: HeadingProps = {
  title: 'My Listings',
  action: {
    text: 'See All',
    icon: <BsArrowRightShort className='icon' />,
  },
};

export default heading;
