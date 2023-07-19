import type { HeadingProps } from '../../../types';

const { BsArrowRightShort } = await import('react-icons/bs');

const listingsHeading: HeadingProps = {
  title: { text: 'My Listings' },
  action: {
    text: 'See All',
    icon: <BsArrowRightShort className='icon' />,
  },
};

export default listingsHeading;
