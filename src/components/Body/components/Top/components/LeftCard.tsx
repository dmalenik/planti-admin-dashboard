import type { LeftCardProps } from '../types';

const LeftCard = (props: LeftCardProps): JSX.Element => {
  return (
    <div className='leftCard flex'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <div className='buttons flex'>
        <button className='btn'>{props.buttons.btn1}</button>
        <button className='btn transparent'>{props.buttons.btn2}</button>
      </div>
      <div className='videoDiv'>
        <video src={props.videoSrc} autoPlay loop muted></video>
      </div>
    </div>
  );
};

export default LeftCard;
