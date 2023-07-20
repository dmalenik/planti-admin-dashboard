import type { Data, TopProps } from '../../shared/types';
import { AdminBar, LeftCard, RightCard } from '../../components';
import './Top.scss';

const Top = (props: Data<TopProps>): JSX.Element => {
  const [adminBar, leftCard, rightCard] = props.data;

  return (
    <div className='topSection'>
      <AdminBar params={adminBar} />
      <div className='cardSection flex'>
        <LeftCard params={leftCard} />
        <RightCard params={rightCard} />
      </div>
    </div>
  );
};

export default Top;
