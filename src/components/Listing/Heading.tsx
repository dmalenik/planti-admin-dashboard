import type { HeadingProps } from '../../shared/types';

const Heading = (props: HeadingProps): JSX.Element => {
  return (
    <div className='heading flex'>
      <h1>{props.title.text}</h1>
      <button className='btn flex'>
        {props.action.text} {props.action.icon}
      </button>
    </div>
  );
};

export default Heading;
