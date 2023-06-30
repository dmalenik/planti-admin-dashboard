import { IconType } from 'react-icons';
import { ReactElement } from 'react';

interface CardProps {
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

export type { CardProps, CardsArrProps };
