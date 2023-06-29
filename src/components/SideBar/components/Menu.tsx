import { type MenuProps } from '../types';

const Menu = (props: MenuProps): JSX.Element => {
  const listItems: JSX.Element[] = props.menuListItems.map(
    (menuListItem): JSX.Element => (
      <li className='listItem'>
        <a href='' className='menuLink flex'>
          {menuListItem.icon}
          <span className='smallText'>{menuListItem.text}</span>
        </a>
      </li>
    )
  );

  return (
    <div className={props.menuStyles}>
      <h3 className='divTitle'>{props.title}</h3>
      <ul className='menuLists grid'>{listItems}</ul>
    </div>
  );
};

export default Menu;
