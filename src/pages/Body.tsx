/* 
** do not import templates with await import
** causes blank page on production
*/
import { Top, Listing, Activity } from '../templates';
import './Body.scss';

const Body = () => {
  return (
    <div className='mainContent'>
      <Top />
      <div className='bottom flex'>
        <Listing />
        <Activity />
      </div>
    </div>
  );
};

export default Body;
