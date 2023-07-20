import { Body } from './pages';
import { SideBar } from './templates';
import bodyData from './pages/bodyData';
import bodyData from './shared/data/Body/bodyData';
import './App.scss';

const App = (): JSX.Element => {
  return (
    <div className='container'>
      <SideBar data={sideBarData} />
      <Body data={bodyData} />
    </div>
  );
};

export default App;
