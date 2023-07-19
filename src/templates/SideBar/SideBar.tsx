import logo from '../../shared/assets/SideBar/42kb/webp/sidebar-logo.webp';
import { Menu, HelpCenter } from '../../components';
import type {
  SideBarProps,
  Data,
} from '../../shared/types/SideBar/sideBarTypes';
import './SideBar.scss';

const SideBar = (props: Data<SideBarProps>): JSX.Element => {
  const [quickMenu, settingsMenu, helpCenter] = props.data;

  return (
    <div className='sideBar grid'>
      <div className='logoDiv flex'>
        <img src={logo} alt='Image Name' />
        <h2>Planti.</h2>
      </div>
      <Menu params={quickMenu} />
      <Menu params={settingsMenu} />
      <HelpCenter params={helpCenter} />
    </div>
  );
};

export default SideBar;
