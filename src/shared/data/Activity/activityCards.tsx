import type { activityCardsProps } from '../../types';
import getUID from '../../../utils/getUID';
import sunAndPlantsImg from '../../assets/images/webp-42/activitycards-sun_and_plants.webp';
import someImg1 from '../../assets/images/webp-42/activitycards-leaf.webp';
import someImg2 from '../../assets/images/webp-42/activitycards-leaves.webp';

const UIDArr: string[] = getUID(3);

const activityCards: activityCardsProps[] = [
  {
    id: UIDArr[0],
    portrait: {
      src: sunAndPlantsImg,
      alt: 'Sun and Plants Customer Image',
    },
    details: {
      name: 'Sun and Plants',
      status: 'Ordered a new plant',
    },
    duration: '2 min ago',
  },
  {
    id: UIDArr[1],
    portrait: {
      src: someImg1,
      alt: 'Some Customer Image',
    },
    details: {
      name: 'Sun and Plants',
      status: 'Ordered a new plant',
    },
    duration: '2 min ago',
  },
  {
    id: UIDArr[2],
    portrait: {
      src: someImg2,
      alt: 'Some 2nd Customer Image',
    },
    details: {
      name: 'Sun and Plants',
      status: 'Ordered a new plant',
    },
    duration: '2 min ago',
  },
];

export default activityCards;
