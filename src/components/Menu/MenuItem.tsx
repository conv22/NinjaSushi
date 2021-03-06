import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addItemThunkAction } from '../../redux/cart/actions';
import classes from './Menu.module.scss';

type RowItemProps = {
  image: string;
  title: string;
  weight: number;
  description: string;
  price: number;
  id: string;
};

export const MenuItem: React.FC<RowItemProps> = ({
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

export default MenuItem;
