import { ActivityCards, Heading } from '../../components';
import { activityHeading, activityCards } from '../../shared/data';
import './Activity.scss';

const Activity = (): JSX.Element => {
  return (
    <div className='activitySection'>
      <Heading title={activityHeading.title} action={activityHeading.action} />
      <ActivityCards items={activityCards} />
    </div>
  );
};

export default Activity;
