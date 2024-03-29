import type { TopProps } from "../../shared/types/topTypes";
import { getUID } from "../../shared/utils";

const { BiSearchAlt } = await import("react-icons/bi");
const { TbMessageCircle } = await import("react-icons/tb");
const { IoMdNotificationsOutline } = await import("react-icons/io");
const { BsArrowRightShort } = await import("react-icons/bs");

const UIDArr: string[] = getUID(4);

const topData: TopProps = [
  {
    title: {
      heading: "Welcome to Planti",
      description: "Hello, Dmitriy. Welcome back!",
    },
    searchBar: {
      type: "text",
      id: "SearchBar",
      name: "SearchBar",
      icon: <BiSearchAlt className="icon" />,
    },
    adminDiv: {
      icons: [
        <TbMessageCircle className="icon" key={UIDArr[0]} />,
        <IoMdNotificationsOutline className="icon" key={UIDArr[1]} />,
      ],
      img: { src: "./adminbar-admin.webp", alt: "Admin Image" },
    },
  },
  {
    title: {
      heading: "Create and sell extraordinary products",
      description:
        "The world's fast growing industry today are natural made products",
    },
    actions: {
      action1: "Exlore More",
      action2: "Top Sellers",
    },
    video: {
      src: "./rainyVideo_crop_720.mp4",
      poster: "./rainyVideoPoster.webp",
    },
  },
  {
    heading: "My Stats",
    stats: [
      {
        id: UIDArr[2],
        type: "Orders",
        date: "Today",
        quantity: 4,
      },
      {
        id: UIDArr[3],
        type: "Orders",
        date: "This Month",
        quantity: 127,
      },
    ],
    link: {
      action: "Go to my orders",
      icon: <BsArrowRightShort className="icon" />,
    },
    img: {
      src: "./rightcard-flower.webp",
      alt: "Flowers Image",
    },
  },
];

export default topData;
