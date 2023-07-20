/*
 ** do not import templates with await import
 ** causes blank page on production
 */
import type { Data } from '../shared/types';
import type { BodyProps } from './bodyTypes';
import { Top, Listing, Activity } from '../templates';
import './Body.scss';

const Body = (props: Data<BodyProps>) => {
  const [topData, listingData, activityData] = props.data;

  return (
    <div className='mainContent'>
      <Top data={topData} />
      <div className='bottom flex'>
        <Listing data={listingData} />
        <Activity data={activityData} />
      </div>
    </div>
  );
};

export default Body;
