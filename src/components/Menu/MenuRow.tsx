import React from 'react';
import classes from './Menu.module.scss';
import { Item } from '../../redux/menu/types';
import { useDispatch } from 'react-redux';
import { LoadItemThunk } from '../../redux/menu/actions';

type MenuRowProps = {
  items: Item[];
  title: string;
};
const MenuRow: React.FC<MenuRowProps> = ({ title, items }) => {
  const dispatch = useDispatch();
  const linkHandler = (id: string) => {
    dispatch(LoadItemThunk(id));
  };
  return (
    <div className={classes.row}>
      <div className={classes.row_header}>
        <div className={classes.row_header_left}>{title}</div>
        <div className={classes.row_header_right}>
          <button className={classes.row_button}>Смотреть все</button>
        </div>
      </div>
      <div className={classes.row_items}>
        {items.map(item => (
          <RowItem
            key={item.id}
            id={item.id}
            image={item.image}
            description={item.description}
            price={item.price}
            title={item.title}
            weight={item.weight}
            linkHandler={linkHandler}
          />
        ))}
      </div>
    </div>
  );
};

type RowItemProps = {
  image: string;
  title: string;
  weight: number;
  description: string;
  price: number;
  id: string;
  linkHandler(id: string): void;
};
const RowItem: React.FC<RowItemProps> = ({
  image,
  title,
  weight,
  description,
  price,
  id,
  linkHandler,
}) => {
  return (
    <div className={classes.item}>
      <div className={classes.item_img} onClick={() => linkHandler(id)}>
        <img src={image} alt='' />
      </div>
      <div className={classes.item_description}>
        <div className={classes.item_title}>{title}</div>
        <div className={classes.item_small}>
          <span>{weight} г</span> - {description}
        </div>
      </div>
      <div className={classes.item_buy}>
        <div className={classes.buy_button}>
          <button className={classes.buy_button_button}>В корзину</button>
        </div>
        <div className={classes.price}>{price}Р</div>
      </div>
    </div>
  );
};

export { MenuRow };
