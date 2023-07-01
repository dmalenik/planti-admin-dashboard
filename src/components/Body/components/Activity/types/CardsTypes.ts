interface CardsProps {
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

interface CardsArrProps<T> {
  items: T[];
}

export type { CardsProps, CardsArrProps };
