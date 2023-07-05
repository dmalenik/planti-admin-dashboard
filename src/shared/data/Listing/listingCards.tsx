import type { listingCardsProps } from '../../types';
import getUID from '../../../utils/getUID';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import leavesImg from '../../assets/images/webp-42/listingcards-annual_vince.webp';
import palacePlantsImg from '../../assets/images/webp-42/listingcards-palace_and_plants.webp';
import mointainsViewImg from '../../assets/images/webp-42/listingcards-mountains_view.webp';

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
