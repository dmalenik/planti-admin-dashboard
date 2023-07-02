import logo from '../../shared/assets/images/pexels-alan-cabello-1173217.jpg';
import { Menu, HelpCenter } from '../../components';
import { quickMenu, settingsMenu, helpCenter } from '../../shared/data';
import '../../shared/styles/SideBar.scss';

const SideBar = (): JSX.Element => (
  <div className='sideBar grid'>
    <div className='logoDiv flex'>
      <img src={logo} alt='Image Name' />
      <h2>Planti.</h2>
    </div>
    <Menu
      type={quickMenu.type}
      title={quickMenu.title}
      listItems={quickMenu.listItems}
    />
    <Menu
      type={settingsMenu.type}
      title={settingsMenu.title}
      listItems={settingsMenu.listItems}
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
