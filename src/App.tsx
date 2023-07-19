import { Body } from './pages';
import { SideBar } from './templates';
import sideBarData from './shared/data/SideBar/sideBarData';
import './App.scss';

const App = (): JSX.Element => {
  return (
    <div className='container'>
      <SideBar data={sideBarData} />
      <Body />
    </div>
  );
};

export default App;
