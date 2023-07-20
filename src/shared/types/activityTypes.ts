import type { HeadingProps } from '.';

interface ActivityCardsProps {
  id: string;
  portrait: {
    src: string;
    alt: string;
  };
  details: {
    name: string;
    status: string;
  };
  duration: string;
}

type ActivityProps = [HeadingProps, ActivityCardsProps[]];

export type { ActivityProps, ActivityCardsProps };
