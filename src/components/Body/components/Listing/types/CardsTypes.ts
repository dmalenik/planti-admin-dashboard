import { IconType } from 'react-icons';
import { ReactElement } from 'react';

interface CardsProps {
  id: string;
  icon: ReactElement<IconType>;
  img: {
    src: string;
    alt: string;
  };
  title: string;
}

interface CardsArrProps<T> {
  items: T[];
}

export type { CardsProps, CardsArrProps };
