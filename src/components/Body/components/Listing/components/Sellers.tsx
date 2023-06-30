import type { SellerProps, SellersArrProps } from '../types';

export const Sellers = (props: SellersArrProps<SellerProps>): JSX.Element => {
  const sellersArr: JSX.Element[] = props.items.map(
    ({ id, type, heading, card }): JSX.Element => {
      return (
        <div className={type} key={id}>
          <div className='heading flex'>
            <h3>{heading.title}</h3>
            <button className='btn flex'>
              {heading.btn.action} {heading.btn.icon}
            </button>
          </div>
          <div className='card flex'>
            <div className='users'>
              {card.users.map(
                (user): JSX.Element => (
                  <img key={user.id} src={user.src} alt={user.alt} />
                )
              )}
            </div>
            <div className='cardText'>
              <span>{`${card.text.results.quantity} ${card.text.results.product} ${card.text.results.action}`}</span>{' '}
              <br />
              <small>
                {`${card.text.sellers.quantity} ${card.text.sellers.role}`}
                <span className='date'>{`${card.text.sellers.date.digit} ${card.text.sellers.date.type}`}</span>
              </small>
            </div>
          </div>
        </div>
      );
    }
  );

  return <div className='sellers flex'>{sellersArr}</div>;
};

export default Sellers;
