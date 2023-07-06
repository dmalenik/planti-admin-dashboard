interface LeftCardProps {
  title: string;
  description: string;
  actions: {
    action1: string;
    action2: string;
  };
  video: { src: string; poster: string };
}

export type { LeftCardProps };
