import { ReactElement } from 'react';

interface HelpCenterData {
  title: string;
  description: string;
  btnText: string;
  icon: ReactElement;
}

interface HelpCenterProps {
  icon: ReactElement;
  title: string;
  description: string;
  btnText: string;
}

export { type HelpCenterData, type HelpCenterProps };
