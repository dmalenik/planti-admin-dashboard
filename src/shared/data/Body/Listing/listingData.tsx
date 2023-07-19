import type {
  ListingProps,
  HeadingProps,
  ListingCardsProps,
  SellerProps,
} from '../../../types/Listing/listingTypes';

import getUID from '../../../../utils/getUID';

import leavesImg from '../../../assets/Listing/42kb/webp/listingcards-annual_vince.webp';
import palacePlantsImg from '../../../assets/Listing/42kb/webp/listingcards-palace_and_plants.webp';
import mointainsViewImg from '../../../assets/Listing/42kb/webp/listingcards-mountains_view.webp';
import plantsAndWaterfallImg from '../../../assets/Listing/42kb/webp/topsellers-waterfall.webp';
import flowersAndMountainsImg from '../../../assets/Listing/42kb/webp/topsellers-mountains_and_flowers.webp';
import someImg2 from '../../../assets/Listing/42kb/webp/topsellers-flowers.webp';

const { BsArrowRightShort } = await import('react-icons/bs');
const { AiFillHeart, AiOutlineHeart } = await import('react-icons/ai');

const UIDArr: string[] = getUID(11);

const heading: HeadingProps = {
  title: { text: 'My Listings' },
  action: {
    text: 'See All',
    icon: <BsArrowRightShort className='icon' />,
  },
};

const listingCards: ListingCardsProps[] = [
  {
    id: UIDArr[0],
    icon: <AiFillHeart className='icon' />,
    img: { src: leavesImg, alt: 'Annual Vince' },
    title: 'Annual Vince',
  },
  {
    id: UIDArr[1],
    icon: <AiOutlineHeart className='icon' />,
    img: { src: palacePlantsImg, alt: 'Palace and Plants' },
    title: 'Palace and Plants',
  },
  {
    id: UIDArr[2],
    icon: <AiFillHeart className='icon' />,
    img: { src: mointainsViewImg, alt: 'Mountains View' },
    title: 'Mountains View',
  },
];

const topSellers: SellerProps<HeadingProps> = {
  id: UIDArr[7],
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
        id: UIDArr[8],
        src: plantsAndWaterfallImg,
        alt: 'Plants and Waterfall',
      },
      {
        id: UIDArr[9],
        src: flowersAndMountainsImg,
        alt: 'Flowers and Mountains',
      },
      {
        id: UIDArr[10],
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

const featuredSellers: SellerProps<HeadingProps> = {
  id: UIDArr[3],
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
        id: UIDArr[4],
        src: plantsAndWaterfallImg,
        alt: 'Plants and Waterfall',
      },
      {
        id: UIDArr[5],
        src: flowersAndMountainsImg,
        alt: 'Flowers and Mountains',
      },
      {
        id: UIDArr[6],
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

const listingData: ListingProps = [
  heading,
  listingCards,
  topSellers,
  featuredSellers,
];

export default listingData;
