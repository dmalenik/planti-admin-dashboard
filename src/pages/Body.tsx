/*
 ** do not import templates with await import
 ** causes blank page on production
 */

import { Data } from '../shared/types/SideBar/sideBarTypes';
import { BodyProps } from '../shared/types/Body/bodyTypes';
import { Top, Listing, Activity } from '../templates';
import './Body.scss';

const Body = (props: Data<BodyProps>) => {
  const [topData, listingData] = props.data;

  return (
    <div className='mainContent'>
      <Top data={topData} />
      <div className='bottom flex'>
        <Listing data={listingData} />
        <Activity />
      </div>
    </div>
  );
};

export default Body;
