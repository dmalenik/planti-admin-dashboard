import type { Data, SideBarProps } from "../../shared/types";
import { Menu, HelpCenter } from "../../components";
import "./SideBar.scss";

const SideBar = (props: Data<SideBarProps>): JSX.Element => {
  const [quickMenu, settingsMenu, helpCenter] = props.data;

  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src="/sidebar-logo.webp" alt="Image Name" />
        <h2>Planti.</h2>
      </div>
      <Menu params={quickMenu} />
      <Menu params={settingsMenu} />
      <HelpCenter params={helpCenter} />
    </div>
  );
};

export default SideBar;
