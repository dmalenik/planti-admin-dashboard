import { ReactElement } from "react";
import type { IconType } from "react-icons";

interface MenuProps {
  type: string;
  title: string;
  listItems: {
    id: string;
    icon: ReactElement<IconType>;
    description: string;
  }[];
}

interface HelpCenterProps {
  icon: ReactElement<IconType>;
  title: string;
  description: string;
  btnText: string;
}

type SideBarProps = [MenuProps, MenuProps, HelpCenterProps];

export type { SideBarProps, MenuProps, HelpCenterProps };
