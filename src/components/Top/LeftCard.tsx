import type { Params } from '../../shared/types/SideBar/sideBarTypes';
import type { LeftCardProps } from '../../shared/types/Top/topTypes';

const LeftCard = (props: Params<LeftCardProps>): JSX.Element => {
  const { title, actions, video } = props.params;

  return (
    <div className='leftCard flex'>
      <h1>{title.heading}</h1>
      <p>{title.description}</p>
      <div className='buttons flex'>
        <button className='btn'>{actions.action1}</button>
        <button className='btn transparent'>{actions.action2}</button>
      </div>
      <div className='videoDiv'>
        <video
          src={video.src}
          poster={video.poster}
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default LeftCard;
