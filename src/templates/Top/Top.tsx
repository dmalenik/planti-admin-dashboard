import { AdminBar, LeftCard, RightCard } from '../../components';
import './Top.scss';

const { adminBar, rightCard, leftCard } = await import('../../shared/data');

const Top = (): JSX.Element => {
  return (
    <div className='topSection'>
      <AdminBar
        title={adminBar.title}
        searchBar={adminBar.searchBar}
        adminDiv={adminBar.adminDiv}
      />
      <div className='cardSection flex'>
        <LeftCard
          title={leftCard.title}
          description={leftCard.description}
          actions={leftCard.actions}
          video={leftCard.video}
        />
        <RightCard text={rightCard.text} image={rightCard.image} />
      </div>
    </div>
  );
};

export default Top;
