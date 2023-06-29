import { Body, SideBar } from './components';
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
