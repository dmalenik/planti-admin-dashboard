import type { MenuProps } from '../types';

const Menu = (props: MenuProps): JSX.Element => {
  const menuListItems: JSX.Element[] = props.listItems.map(
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
    <div className={props.type}>
      <h3 className='divTitle'>{props.title}</h3>
      <ul className='menuLists grid'>{menuListItems}</ul>
    </div>
  );
};

export default Menu;
