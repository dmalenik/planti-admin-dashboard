interface activityCardsProps {
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

interface activityCardsArrProps<T> {
  items: T[];
}

export type { activityCardsProps, activityCardsArrProps };
