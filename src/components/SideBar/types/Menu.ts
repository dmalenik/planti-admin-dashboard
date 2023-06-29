import { ReactElement } from 'react';

interface MenuData<T> {
  title: string;
  listItems: T[];
  styles: string;
}

interface MenuListItems {
  icon: ReactElement;
  text: string;
}

interface MenuProps {
  title: string;
  menuListItems: { icon: ReactElement; text: string }[];
  menuStyles: string;
}

export type { MenuData, MenuListItems, MenuProps };
