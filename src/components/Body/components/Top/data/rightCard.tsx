import type { RightCardProps } from '../types';
import { BsArrowRightShort } from 'react-icons/bs';
import flowerImage from '../assets/pexels-gursharndeep-singh-1261016.jpg';

const rightCard: RightCardProps = {
  textDiv: {
    heading: 'My Stats',
    stats: [
      {
        date: 'Today',
        quantity: '4 Orders',
      },
      {
        date: 'This Month',
        quantity: '127 Orders',
      },
    ],
    link: {
      text: 'Go to my orders',
      icon: <BsArrowRightShort className='icon' />,
    },
  },
  imageDiv: {
    imgSrc: flowerImage,
  },
};

export default rightCard;
