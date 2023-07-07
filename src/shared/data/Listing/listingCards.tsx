import type { listingCardsProps } from '../../types';
import getUID from '../../../utils/getUID';

import leavesImg from '../../assets/Listing/42kb/webp/listingcards-annual_vince.webp';
import palacePlantsImg from '../../assets/Listing/42kb/webp/listingcards-palace_and_plants.webp';
import mointainsViewImg from '../../assets/Listing/42kb/webp/listingcards-mountains_view.webp';

const { AiFillHeart, AiOutlineHeart } = await import('react-icons/ai');

const UIDArr: string[] = getUID(3);

const listingCards: listingCardsProps[] = [
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

export default listingCards;
