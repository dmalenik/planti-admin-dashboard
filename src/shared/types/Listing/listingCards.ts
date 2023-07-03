import type { IconType } from 'react-icons';
import { ReactElement } from 'react';

interface listingCardsProps {
  id: string;
  icon: ReactElement<IconType>;
  img: {
    src: string;
    alt: string;
  };
  title: string;
}

interface listingCardsArrProps<T> {
  items: T[];
}

export type { listingCardsProps, listingCardsArrProps };
