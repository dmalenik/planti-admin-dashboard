import type { SellerProps, HeadingProps } from '../../../types';
import getUID from '../../../../utils/getUID';

import plantsAndWaterfallImg from '../../../assets/Listing/42kb/webp/topsellers-waterfall.webp';
import flowersAndMountainsImg from '../../../assets/Listing/42kb/webp/topsellers-mountains_and_flowers.webp';
import someImg2 from '../../../assets/Listing/42kb/webp/topsellers-flowers.webp';

const { BsArrowRightShort } = await import('react-icons/bs');

const UIDArr: string[] = getUID(4);

const featuredSellers: SellerProps<HeadingProps> = {
  id: UIDArr[0],
  type: 'featuredSellers',
  heading: {
    title: { text: 'Featured Sellers' },
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
        quantity: 28.456,
        product: 'Plants ',
        action: 'sold',
      },
      sellers: {
        role: 'Sellers',
        quantity: 26,
        date: {
          type: ' Days',
          digit: 31,
        },
      },
    },
  },
};

export default featuredSellers;
