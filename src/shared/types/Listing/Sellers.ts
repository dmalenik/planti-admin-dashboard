import { IconType } from 'react-icons';
import { ReactElement } from 'react';

interface SellerProps {
  id: string;
  type: string;
  heading: {
    title: string;
    btn: {
      action: string;
      icon: ReactElement<IconType>;
    };
  };
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

export type { SellerProps };
