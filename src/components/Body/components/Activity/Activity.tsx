import { Heading } from '../../../../shared/components';
import { heading, cards } from './data';
import { Cards } from './components';
import './Activity.scss';

const Activity = (): JSX.Element => {
  return (
    <div className='activitySection'>
      <Heading title={heading.title} action={heading.action} />
      <Cards items={cards} />
    </div>
  );
};

export default Activity;
