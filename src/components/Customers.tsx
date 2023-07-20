import type { Params, ActivityCardsProps } from '../shared/types';

const Customers = (props: Params<ActivityCardsProps[]>): JSX.Element => {
  const customersArr: JSX.Element[] = props.params.map(
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

  return <div className='secContainer grid'>{customersArr}</div>;
};

export default Customers;
