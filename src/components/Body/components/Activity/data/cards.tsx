import type { CardsProps } from '../types';
import getUID from '../../../../../utils/getUID';
import sunAndPlantsImg from '../../../../../assets/imgs/pexels-arnie-watkins-3068249.jpg';
import someImg1 from '../../../../../assets/imgs/pexels-daniel-maldonado-4634361.jpg';
import someImg2 from '../../../../../assets/imgs/pexels-lina-kivaka-1661572.jpg';

const UIDArr = getUID(3);

const cards: CardsProps[] = [
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

export default cards;
