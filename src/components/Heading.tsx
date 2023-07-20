import type { Params, HeadingProps } from '../shared/types';

const Heading = (props: Params<HeadingProps>): JSX.Element => {
  const { title, action } = props.params;

  return (
    <div className='heading flex'>
      <h1>{title.text}</h1>
      <button className='btn flex'>
        {action.text} {action.icon}
      </button>
    </div>
  );
};

export default Heading;
