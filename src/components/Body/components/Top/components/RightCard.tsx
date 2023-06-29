import type { RightCardProps } from '../types';
import { HelpCenter } from '../../../../SideBar/components';
import { helpCenter } from '../../../../SideBar/data';

const RightCard = (props: RightCardProps): JSX.Element => {
  return (
    <div className='rightCard flex'>
      <div className='main flex'>
        <div className='textDiv'>
          <h1>{props.textDiv.heading}</h1>
          <div className='flex'>
            {props.textDiv.stats.map((stat): JSX.Element => {
              return (
                <span>
                  {stat.date} <br /> <small>{stat.quantity}</small>
                </span>
              );
            })}
          </div>
          <span className='flex link'>
            {props.textDiv.link.text} {props.textDiv.link.icon}
          </span>
        </div>
        <div className='imageDiv'>
          <img src={props.imageDiv.imgSrc} alt='Image Name' />
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
