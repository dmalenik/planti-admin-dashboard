import { ReactElement } from 'react';
import { IconType } from 'react-icons';

interface HeadingProps {
  title: string;
  action: {
    text: string;
    icon: ReactElement<IconType>;
  };
}

export type { HeadingProps };
