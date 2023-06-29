import { AdminBar, LeftCard, RightCard } from './components';
import { adminBar, rightCard, leftCard } from './data';
import './Top.scss';

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
          buttons={leftCard.buttons}
          videoSrc={leftCard.videoSrc}
        />
        <RightCard textDiv={rightCard.textDiv} imageDiv={rightCard.imageDiv} />
      </div>
    </div>
  );
};

export default Top;
