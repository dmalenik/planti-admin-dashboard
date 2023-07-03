import type { AdminBarProps } from '../../shared/types';

const AdminBar = (props: AdminBarProps): JSX.Element => {
  return (
    <div className='headerSection flex'>
      <div className='title'>
        <h1>{props.title.heading}</h1>
        <p>{props.title.description}</p>
      </div>
      <div className='searchBar flex'>
        <input
          type={props.searchBar.type}
          name={props.searchBar.name}
          id={props.searchBar.id}
          placeholder='Search Dashboard'
        />
        {props.searchBar.icon}
      </div>
      <div className='adminDiv flex'>
        {props.adminDiv.icons.map((icon) => icon)}
        <div className='adminImage'>
          <img src={props.adminDiv.img.src} alt={props.adminDiv.img.alt} />
        </div>
      </div>
    </div>
  );
};

export default AdminBar;
