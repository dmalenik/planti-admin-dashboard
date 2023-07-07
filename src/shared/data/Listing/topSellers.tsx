import type { HeadingProps, SellerProps } from '../../types';
import getUID from '../../../utils/getUID';

import plantsAndWaterfallImg from '../../assets/Listing/42kb/webp/topsellers-waterfall.webp';
import flowersAndMountainsImg from '../../assets/Listing/42kb/webp/topsellers-mountains_and_flowers.webp';
import someImg2 from '../../assets/Listing/42kb/webp/topsellers-flowers.webp';

const { BsArrowRightShort } = await import('react-icons/bs');

const UIDArr: string[] = getUID(4);

const topSellers: SellerProps<HeadingProps> = {
  id: UIDArr[0],
  type: 'topSellers',
  heading: {
    title: { text: 'Top Sellers' },
    action: {
      text: 'See All',
      icon: <BsArrowRightShort className='icon' />,
    },
  },
  card: {
    users: [
      {
        id: UIDArr[1],
        src: plantsAndWaterfallImg,
        alt: 'Plants and Waterfall',
      },
      {
        id: UIDArr[2],
        src: flowersAndMountainsImg,
        alt: 'Flowers and Mountains',
      },
      {
        id: UIDArr[3],
        src: someImg2,
        alt: 'Some Img 2',
      },
    ],
    text: {
      results: {
        quantity: 14.456,
        product: 'Plants ',
        action: 'sold',
      },
      sellers: {
        role: 'Sellers',
        quantity: 21,
        date: {
          type: ' Days',
          digit: 7,
        },
      },
    },
  },
};

export default topSellers;
