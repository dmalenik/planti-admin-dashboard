import type {
  activityCardsProps,
  activityCardsArrProps,
} from '../../shared/types';

const Cards = (
  props: activityCardsArrProps<activityCardsProps>
): JSX.Element => {
  const customers: JSX.Element[] = props.items.map(
    ({ id, portrait, details, duration }): JSX.Element => {
      return (
        <div key={id} className='singleCustomer flex'>
          <img src={portrait.src} alt={portrait.alt} />
          <div className='customerDetails'>
            <span className='name'>{details.name}</span>
            <small>{details.status}</small>
          </div>
          <p className='duration'>{duration}</p>
        </div>
      );
    }
  );

  return <div className='secContainer grid'>{customers}</div>;
};

export default Cards;
