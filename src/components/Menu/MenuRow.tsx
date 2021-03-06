import React from 'react';
import { useHistory } from 'react-router-dom';
import MenuItem from './MenuItem';
import { menuItem } from '../../redux/menu/types';
import classes from './Menu.module.scss';

type MenuRowProps = {
  items: menuItem[];
  title: string;
  url: string;
};
const MenuRow: React.FC<MenuRowProps> = ({ title, items, url }) => {
  const history = useHistory();
  return (
    <div className={classes.row}>
      <div className={classes.row_header}>
        <div className={classes.row_header_left}>{title}</div>
        <div className={classes.row_header_right}>
          <button
            className={classes.row_button}
            onClick={() => history.push(`/categories/${url}`)}
          >
            Смотреть все
          </button>
        </div>
      </div>
      <div className={classes.row_items}>
        {items.map((item: any) => (
          <MenuItem
            key={item.id}
            id={item.id}
            image={item.image}
            description={item.description}
            price={item.price}
            title={item.title}
            weight={item.weight}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuRow;
