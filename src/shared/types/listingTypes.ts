import { ReactElement } from 'react';
import type { IconType } from 'react-icons';
import type { HeadingProps } from '.';

interface ListingCardsProps {
  id: string;
  icon: ReactElement<IconType>;
  img: {
    src: string;
    alt: string;
  };
  title: string;
}

interface SellerProps<T> {
  id: string;
  type: string;
  heading: T;
  card: {
    users: { id: string; src: string; alt: string }[];
    text: {
      results: {
        quantity: number;
        product: string;
        action: string;
      };
      sellers: {
        role: string;
        quantity: number;
        date: {
          type: string;
          digit: number;
        };
      };
    };
  };
}

type ListingProps = [
  HeadingProps,
  ListingCardsProps[],
  SellerProps<HeadingProps>,
  SellerProps<HeadingProps>
];

export type { ListingProps, ListingCardsProps, SellerProps };
