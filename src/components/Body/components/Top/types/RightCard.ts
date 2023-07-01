import type { IconType } from 'react-icons';
import { ReactElement } from 'react';

interface RightCardProps {
  text: {
    heading: string;
    stats: {
      id: string;
      type: string;
      date: string;
      quantity: number;
    }[];
    link: {
      action: string;
      icon: ReactElement<IconType>;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

export type { RightCardProps };
