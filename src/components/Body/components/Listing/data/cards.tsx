import type { CardProps } from '../types';
import getUID from '../../../../../utils/getUID';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import leavesImg from '../assets/pexels-felipe-alves-10616343.jpg';
import palacePlantsImg from '../assets/pexels-maria-orlova-4946907.jpg';
import mointainsViewImg from '../assets/pexels-tim-gouw-5677269.jpg';

const UIDArr: string[] = getUID(3);

const cards: CardProps[] = [
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

export default cards;
