import type { HelpCenterProps } from '../../shared/types';

const HelpCenter = (props: HelpCenterProps): JSX.Element => {
  return (
    <div className='sideBarCard'>
      {props.icon}
      <div className='cardContent'>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button className='btn'>{props.btnText}</button>
      </div>
    </div>
  );
};

export default HelpCenter;
