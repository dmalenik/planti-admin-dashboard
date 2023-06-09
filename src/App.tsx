import { Body } from './pages';
import { SideBar } from './templates';
import './App.scss';

const App = (): JSX.Element => {
  return (
    <div className='container'>
      <SideBar />
      <Body />
    </div>
  );
};

export default App;
