import type { CardsProps, CardsArrProps } from '../types';

const Cards = (props: CardsArrProps<CardsProps>): JSX.Element => {
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

  return (
    <div className='secContainer grid'>
      {/* <div className='singleCustomer flex'>
        <img src={sunAndPlantsImg} alt='Customer Image' />
        <div className='customerDetails'>
          <span className='name'>Sun and Plants</span>
          <small>Ordered a new plant</small>
        </div>
        <p className='duration'>2 min ago</p>
      </div>
      <div className='singleCustomer flex'>
        <img src={someImg1} alt='Customer Image' />
        <div className='customerDetails'>
          <span className='name'>Sun and Plants</span>
          <small>Ordered a new plant</small>
        </div>
        <div className='duration'>2 min ago</div>
      </div>
      <div className='singleCustomer flex'>
        <img src={someImg2} alt='Customer Image' />
        <div className='customerDetails'>
          <span className='name'>Sun and Plants</span>
          <small>Ordered a new plant</small>
        </div>
        <div className='duration'>2 min ago</div>
      </div> */}
      {customers}
    </div>
  );
};

export default Cards;
