import { BodyProps } from '../shared/types/Body/bodyTypes';
import { Data } from '../shared/types/SideBar/sideBarTypes';
import { Top, Listing, Activity } from '../templates';
import './Body.scss';

const Body = (props: Data<BodyProps>) => {
  const [topData] = props.data;

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
