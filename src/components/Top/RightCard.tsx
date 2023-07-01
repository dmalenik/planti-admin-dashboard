import type { RightCardProps } from '../../shared/types';
import HelpCenter from '../SideBar/HelpCenter';
import { helpCenter } from '../../shared/data';

const RightCard = (props: RightCardProps): JSX.Element => {
  return (
    <div className='rightCard flex'>
      <div className='main flex'>
        <div className='textDiv'>
          <h1>{props.text.heading}</h1>
          <div className='flex'>
            {props.text.stats.map(
              ({ id, type, date, quantity }): JSX.Element => {
                return (
                  <span key={id}>
                    {date} <br />
                    <small>
                      {quantity} {type}
                    </small>
                  </span>
                );
              }
            )}
          </div>
          <span className='flex link'>
            {props.text.link.action} {props.text.link.icon}
          </span>
        </div>
        <div className='imageDiv'>
          <img src={props.image.src} alt={props.image.alt} />
        </div>
      </div>
      <HelpCenter
        icon={helpCenter.icon}
        title={helpCenter.title}
        description={helpCenter.description}
        btnText={helpCenter.btnText}
      />
    </div>
  );
};

export default RightCard;
