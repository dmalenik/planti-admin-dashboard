import type { IconType } from 'react-icons';
import { ReactElement } from 'react';

interface RightCardProps {
  textDiv: {
    heading: string;
    stats: {
      date: string;
      quantity: string;
    }[];
    link: {
      text: string;
      icon: ReactElement<IconType>;
    };
  };
  imageDiv: {
    imgSrc: string;
  };
}

export type { RightCardProps };
