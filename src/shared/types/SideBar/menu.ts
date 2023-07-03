import { ReactElement } from 'react';
import type { IconType } from 'react-icons';

interface MenuProps {
  type: string;
  title: string;
  listItems: {
    id: string;
    icon: ReactElement<IconType>;
    description: string;
  }[];
}

export type { MenuProps };
