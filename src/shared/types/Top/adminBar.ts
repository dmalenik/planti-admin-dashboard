import type { IconType } from 'react-icons';
import { ReactElement } from 'react';

interface AdminBarProps {
  title: {
    heading: string;
    text: string;
  };
  searchBar: {
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

export type { AdminBarProps };