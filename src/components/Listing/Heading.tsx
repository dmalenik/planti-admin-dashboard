import type { Params } from '../../shared/types/SideBar/sideBarTypes';
import type { HeadingProps } from '../../shared/types/Listing/listingTypes';

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
