import type { Params } from '../../shared/types/SideBar/sideBarTypes';
import type { SellerProps, HeadingProps } from '../../shared/types';

export const Sellers = (
  props: Params<SellerProps<HeadingProps>>
): JSX.Element => {
  const { id, type, heading, card } = props.params;

  return (
    <div className={`${type} flex`} key={id}>
      <div className='heading flex'>
        <h3>{heading.title.text}</h3>
        <button className='btn flex'>
          {heading.action.text} {heading.action.icon}
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
          <span>
            {card.text.results.quantity} {card.text.results.product}
            {card.text.results.action}
          </span>
          <br />
          <small>
            {card.text.sellers.quantity} {card.text.sellers.role}
            <span className='date'>
              {card.text.sellers.date.digit}
              {card.text.sellers.date.type}
            </span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
