import { ActivityCards, Heading } from '../../components';
import './Activity.scss';

const { activityCards, activityHeading } = await import('../../shared/data');

const Activity = (): JSX.Element => {
  return (
    <div className='activitySection'>
      <Heading title={activityHeading.title} action={activityHeading.action} />
      <ActivityCards items={activityCards} />
    </div>
  );
};

export default Activity;
