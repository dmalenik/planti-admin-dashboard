import type {
  Params,
  MenuProps,
} from '../../shared/types/SideBar/sideBarTypes';

const Menu = (props: Params<MenuProps>): JSX.Element => {
  const { listItems, type, title } = props.params;
  const menuListItems: JSX.Element[] = listItems.map(
    ({ id, icon, description }): JSX.Element => (
      <li key={id} className='listItem'>
        <a href='' className='menuLink flex'>
          {icon}
          <span className='smallText'>{description}</span>
        </a>
      </li>
    )
  );

  return (
    <div className={type}>
      <h3 className='divTitle'>{title}</h3>
      <ul className='menuLists grid'>{menuListItems}</ul>
    </div>
  );
};

export default Menu;
