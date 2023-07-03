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

export type { SellerProps };
