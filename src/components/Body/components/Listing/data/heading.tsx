import type { HeadingProps } from '../../../../../shared/types';
import { BsArrowRightShort } from 'react-icons/bs';

const heading: HeadingProps = {
  title: { text: 'My Listings' },
  action: {
    text: 'See All',
    icon: <BsArrowRightShort className='icon' />,
  },
};

export default heading;
