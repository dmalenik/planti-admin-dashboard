import type { RightCardProps } from '../types';
import getUID from '../../../../../utils/getUID';
import { BsArrowRightShort } from 'react-icons/bs';
import flowerImage from '../assets/pexels-gursharndeep-singh-1261016.jpg';

const UIDArr: string[] = getUID(2);

const rightCard: RightCardProps = {
  text: {
    heading: 'My Stats',
    stats: [
      {
        id: UIDArr[0],
        type: 'Orders',
        date: 'Today',
        quantity: 4,
      },
      {
        id: UIDArr[1],
        type: 'Orders',
        date: 'This Month',
        quantity: 127,
      },
    ],
    link: {
      action: 'Go to my orders',
      icon: <BsArrowRightShort className='icon' />,
    },
  },
  image: {
    src: flowerImage,
    alt: 'Flowers Image',
  },
};

export default rightCard;
