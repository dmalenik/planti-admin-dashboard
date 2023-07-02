import type { HeadingProps } from '../../types/Listing';
import { BsArrowRightShort } from 'react-icons/bs';

const listingsHeading: HeadingProps = {
  title: { text: 'My Listings' },
  action: {
    text: 'See All',
    icon: <BsArrowRightShort className='icon' />,
  },
};

export default listingsHeading;