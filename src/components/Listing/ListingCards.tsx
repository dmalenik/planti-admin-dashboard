import type {
  listingCardsProps,
  listingCardsArrProps,
} from '../../shared/types';

const Cards = (props: listingCardsArrProps<listingCardsProps>): JSX.Element => {
  const cardsArr: JSX.Element[] = props.items.map(
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
