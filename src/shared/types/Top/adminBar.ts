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

export type { AdminBarProps };
