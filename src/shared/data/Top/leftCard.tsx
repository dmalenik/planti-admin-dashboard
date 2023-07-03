import type { LeftCardProps } from '../../types';
import rainyVideo from '../../assets/videos/pexels-maksim-romashkin-12717007-3840x2160-25fps.mp4';

const leftCard: LeftCardProps = {
  title: 'Create and sell extraordinary products',
  description:
    "The world's fast growing industry today are natural made products",
  actions: {
    action1: 'Exlore More',
    action2: 'Top Sellers',
  },
  video: { src: rainyVideo },
};

export default leftCard;
