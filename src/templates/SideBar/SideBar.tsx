import logo from '../../assets/imgs/pexels-alan-cabello-1173217.jpg';
import { Menu, HelpCenter } from './components/';
import { quickMenuData, settingsMenuData, helpCenterData } from './data';
import './SideBar.scss';

const SideBar = (): JSX.Element => (
  <div className='sideBar grid'>
    <div className='logoDiv flex'>
      <img src={logo} alt='Image Name' />
      <h2>Planti.</h2>
    </div>
  </div>
);

export default SideBar;
