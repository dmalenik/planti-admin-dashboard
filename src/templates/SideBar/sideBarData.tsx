import type { SideBarProps } from "../../shared/types/sideBarTypes";
import { getUID } from "../../shared/utils";

const { IoMdSpeedometer } = await import("react-icons/io");
const { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } =
  await import("react-icons/md");
const { BsTrophy, BsCreditCard2Front, BsQuestionCircle } = await import(
  "react-icons/bs"
);
const { AiOutlinePieChart } = await import("react-icons/ai");
const { BiTrendingUp } = await import("react-icons/bi");

const UIDArr: string[] = getUID(8);

const sideBarData: SideBarProps = [
  {
    type: "menuDiv",
    title: "QUICK MENU",
    listItems: [
      {
        id: UIDArr[0],
        icon: <IoMdSpeedometer className="icon" />,
        description: "Dashboard",
      },
      {
        id: UIDArr[1],
        icon: <MdDeliveryDining className="icon" />,
        description: "My Orders",
      },
      {
        id: UIDArr[2],
        icon: <MdOutlineExplore className="icon" />,
        description: "Explore",
      },
      {
        id: UIDArr[3],
        icon: <BsTrophy className="icon" />,
        description: "Products",
      },
    ],
  },
  {
    type: "settingsDiv",
    title: "SETTINGS",
    listItems: [
      {
        id: UIDArr[4],
        icon: <AiOutlinePieChart className="icon" />,
        description: "Charts",
      },
      {
        id: UIDArr[5],
        icon: <BiTrendingUp className="icon" />,
        description: "Trends",
      },
      {
        id: UIDArr[6],
        icon: <MdOutlinePermContactCalendar className="icon" />,
        description: "Contact",
      },
      {
        id: UIDArr[7],
        icon: <BsCreditCard2Front className="icon" />,
        description: "Billing",
      },
    ],
  },
  {
    title: "Help Center",
    description:
      "Having troubles in Planti, please contact us for more questions",
    btnText: "Go to Help Center",
    icon: <BsQuestionCircle className="icon" />,
  },
];

export default sideBarData;
