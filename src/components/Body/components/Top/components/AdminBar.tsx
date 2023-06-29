import type { AdminBarProps } from '../types';

const AdminBar = (props: AdminBarProps): JSX.Element => {
  return (
    <div className='headerSection flex'>
      <div className='title'>
        <h1>{props.title.heading}</h1>
        <p>{props.title.text}</p>
      </div>
      <div className='searchBar flex'>
        <input type='text' name='' id='' placeholder='Search Dashboard' />
        {props.searchBar.icon}
      </div>
      <div className='adminDiv flex'>
        {props.adminDiv.icons.map((icon) => icon)}
        <div className='adminImage'>
          <img src={props.adminDiv.imgSrc} alt='' />
        </div>
      </div>
    </div>
  );
};

export default AdminBar;
