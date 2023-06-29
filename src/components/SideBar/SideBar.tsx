import logo from './assets/pexels-alan-cabello-1173217.jpg';
import { Menu, HelpCenter } from './components/';
import { quickMenu, settingsMenu, helpCenter } from './data';
import './SideBar.scss';

const SideBar = (): JSX.Element => (
  <div className='sideBar grid'>
    <div className='logoDiv flex'>
      <img src={logo} alt='Image Name' />
      <h2>Planti.</h2>
    </div>
    <Menu
      title={quickMenu.title}
      menuListItems={quickMenu.listItems}
      menuStyles={quickMenu.styles}
    />
    <Menu
      title={settingsMenu.title}
      menuListItems={settingsMenu.listItems}
      menuStyles={settingsMenu.styles}
    />
    <HelpCenter
      icon={helpCenter.icon}
      title={helpCenter.title}
      description={helpCenter.description}
      btnText={helpCenter.btnText}
    />
  </div>
);

export default SideBar;
