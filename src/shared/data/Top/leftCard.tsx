import type { LeftCardProps } from '../../types';

import rainyVideo from '../../assets/Top/crop_720/rainyVideo_crop_720.mp4';
import rainyVideoPoster from '../../assets/Top/rainyVideoPoster.webp';

const leftCard: LeftCardProps = {
  title: 'Create and sell extraordinary products',
  description:
    "The world's fast growing industry today are natural made products",
  actions: {
    action1: 'Exlore More',
    action2: 'Top Sellers',
  },
  video: { src: rainyVideo, poster: rainyVideoPoster },
};

export default leftCard;
