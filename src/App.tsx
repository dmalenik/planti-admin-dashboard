import React from 'react';
import './App.scss';
import Body from './components/Body/Body';
import SideBar from './components/SideBar/SideBar';

const App = (): JSX.Element => {
  return (
    <div className='container'>
      <SideBar />
      <Body />
    </div>
  );
};

export default App;
