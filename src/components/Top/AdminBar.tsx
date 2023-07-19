import type { Params } from '../../shared/types/SideBar/sideBarTypes';
import type { AdminBarProps } from '../../shared/types/Top/topTypes';

const AdminBar = (props: Params<AdminBarProps>): JSX.Element => {
  const { title, searchBar, adminDiv } = props.params;

  return (
    <div className='headerSection flex'>
      <div className='title'>
        <h1>{title.heading}</h1>
        <p>{title.description}</p>
      </div>
      <div className='searchBar flex'>
        <input
          type={searchBar.type}
          name={searchBar.name}
          id={searchBar.id}
          placeholder='Search Dashboard'
        />
        {searchBar.icon}
      </div>
      <div className='adminDiv flex'>
        {adminDiv.icons.map((icon) => icon)}
        <div className='adminImage'>
          <img src={adminDiv.img.src} alt={adminDiv.img.alt} />
        </div>
      </div>
    </div>
  );
};

export default AdminBar;
