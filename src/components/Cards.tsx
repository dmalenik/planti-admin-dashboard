import type { Params, ListingCardsProps } from '../shared/types';

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
