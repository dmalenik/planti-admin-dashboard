import type { Params } from '../../shared/types/SideBar/sideBarTypes';
import type { ListingCardsProps } from '../../shared/types/Listing/listingTypes';

const Cards = (props: Params<ListingCardsProps[]>): JSX.Element => {
  const cardsArr: JSX.Element[] = props.params.map(
    ({ id, icon, img, title }): JSX.Element => {
      return (
        <div key={id} className='singleItem flex'>
          {icon}
          <img src={img.src} alt={img.alt} />
          <h3>{title}</h3>
        </div>
      );
    }
  );

  return <div className='secContainer flex'>{cardsArr}</div>;
};

export default Cards;
