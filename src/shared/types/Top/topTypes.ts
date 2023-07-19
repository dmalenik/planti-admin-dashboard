import type { IconType } from 'react-icons';
import { ReactElement } from 'react';

interface AdminBarProps {
  title: {
    heading: string;
    description: string;
  };
  searchBar: {
    type: string;
    name: string;
    id: string;
    icon: ReactElement<IconType>;
  };
  adminDiv: {
    icons: ReactElement<IconType>[];
    img: {
      src: string;
      alt: string;
    };
  };
}

interface LeftCardProps {
  title: {
    heading: string;
    description: string;
  };
  actions: {
    action1: string;
    action2: string;
  };
  video: { src: string; poster: string };
}

interface RightCardProps {
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
  img: {
    src: string;
    alt: string;
  };
}

type TopProps = [AdminBarProps, LeftCardProps, RightCardProps];

export type { AdminBarProps, LeftCardProps, RightCardProps, TopProps };
