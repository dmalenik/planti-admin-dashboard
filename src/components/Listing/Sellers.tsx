import type { SellerProps, HeadingProps } from '../../shared/types';

export const Sellers = (props: SellerProps<HeadingProps>): JSX.Element => {
  return (
    <div className={`${props.type} flex`} key={props.id}>
      <div className='heading flex'>
        <h3>{props.heading.title.text}</h3>
        <button className='btn flex'>
          {props.heading.action.text} {props.heading.action.icon}
        </button>
      </div>
      <div className='card flex'>
        <div className='users'>
          {props.card.users.map(
            (user): JSX.Element => (
              <img key={user.id} src={user.src} alt={user.alt} />
            )
          )}
        </div>
        <div className='cardText'>
          <span>
            {props.card.text.results.quantity} {props.card.text.results.product}
            {props.card.text.results.action}
          </span>
          <br />
          <small>
            {props.card.text.sellers.quantity} {props.card.text.sellers.role}
            <span className='date'>
              {props.card.text.sellers.date.digit}
              {props.card.text.sellers.date.type}
            </span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
