import type { SellerProps } from '../../types/Listing';
import getUID from '../../../utils/getUID';
import { BsArrowRightShort } from 'react-icons/bs';
import plantsAndWaterfallImg from '../../assets/images/pexels-antonio-friedemann-3890544.jpg';
import flowersAndMountainsImg from '../../assets/images/pexels-dominik-simecek-4807058.jpg';
import someImg2 from '../../assets/images/pexels-madison-inouye-1054024.jpg';

const UIDArr: string[] = getUID(4);

const topSellers: SellerProps = {
  id: UIDArr[0],
  type: 'topSellers',
  heading: {
    title: 'Top Sellers',
    btn: {
      action: 'See All',
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
