import { ReactElement } from "react";
import type { IconType } from "react-icons";

interface HeadingProps {
  title: {
    text: string;
  };
  action: {
    text: string;
    icon: ReactElement<IconType>;
  };
}

export type { HeadingProps };
