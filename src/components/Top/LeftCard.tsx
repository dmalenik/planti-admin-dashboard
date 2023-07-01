import type { LeftCardProps } from '../../shared/types';

const LeftCard = (props: LeftCardProps): JSX.Element => {
  return (
    <div className='leftCard flex'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <div className='buttons flex'>
        <button className='btn'>{props.actions.action1}</button>
        <button className='btn transparent'>{props.actions.action2}</button>
      </div>
      <div className='videoDiv'>
        <video src={props.video.src} autoPlay loop muted></video>
      </div>
    </div>
  );
};

export default LeftCard;
