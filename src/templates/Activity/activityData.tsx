import type { ActivityProps } from '../../shared/types';
import { getUID } from '../../shared/utils';

const { BsArrowRightShort } = await import('react-icons/bs');

const UIDArr: string[] = getUID(3);

const activityData: ActivityProps = [
  {
    title: { text: 'Recent Activity' },
    action: {
      text: 'See All',
      icon: <BsArrowRightShort className='icon' />,
    },
  },
  [
    {
      id: UIDArr[0],
      portrait: {
        src: '/activitycards-sun_and_plants.webp',
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
        src: '/activitycards-leaf.webp',
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
        src: '/activitycards-leaves.webp',
        alt: 'Some 2nd Customer Image',
      },
      details: {
        name: 'Sun and Plants',
        status: 'Ordered a new plant',
      },
      duration: '2 min ago',
    },
  ],
];

export default activityData;
