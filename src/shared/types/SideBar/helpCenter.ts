import type { ReactElement } from 'react';
import type { IconType } from 'react-icons';

interface HelpCenterProps {
  icon: ReactElement<IconType>;
  title: string;
  description: string;
  btnText: string;
}

export type { HelpCenterProps };
