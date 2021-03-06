import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addItemThunkAction } from '../../redux/cart/actions';
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
          <RowItem
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

type RowItemProps = {
  image: string;
  title: string;
  weight: number;
  description: string;
  price: number;
  id: string;
};
export const RowItem: React.FC<RowItemProps> = ({
  image,
  title,
  weight,
  description,
  price,
  id,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const addToCard = (id: string) => {
    dispatch(addItemThunkAction(id));
  };

  return (
    <div className={classes.item}>
      <div
        className={classes.item_img}
        onClick={() => history.push(`/items/${id}`)}
      >
        <img src={image} alt={title} />
      </div>
      <div className={classes.item_description}>
        <div className={classes.item_title}>{title}</div>
        <div className={classes.item_small}>
          <span>{weight} г</span> - {description}
        </div>
      </div>
      <div className={classes.item_buy}>
        <div className={classes.buy_button}>
          <button
            className={classes.buy_button_button}
            onClick={() => addToCard(id)}
          >
            В корзину
          </button>
        </div>
        <div className={classes.price}>{price}Р</div>
      </div>
    </div>
  );
};

export { MenuRow };
