import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeItemAction, deleteItemAction } from '../../redux/cart/actions';
import { RootState } from '../../redux/reducers/RootReducer';
import classes from './RightNav.module.scss';
import Cart from '../../assets/images/icons/cart.svg';
import { CartItem } from '../../redux/cart/types';

const RightNav: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <aside>
      {' '}
      <div className={classes.aside}>
        {items.length > 0 ? <ItemList items={items} /> : <Empty />}
      </div>
    </aside>
  );
};

type ItemListProps = {
  items: CartItem[];
};

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className={classes.cart_items}>
      <h3>Ваш заказ</h3>
      <div className={classes.cart_list}>
        {items.map(item => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

type ItemProps = {
  item: CartItem;
};

const Item: React.FC<ItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(deleteItemAction(item.id));
  };

  const plusItem = () => {
    dispatch(changeItemAction(item.id, item.quantity + 1));
  };

  const minusItem = () => {
    dispatch(changeItemAction(item.id, item.quantity - 1));
  };

  return (
    <div className={classes.cart_item}>
      <div className={classes.cart_item_info}>
        <div className={classes.cart_item_title}>{item.title}</div>
        <div className={classes.cart_control}>
          <button className={classes.cart_minus} onClick={minusItem}></button>
          <div className={classes.cart_quantity}>{item.quantity}</div>
          <button className={classes.cart_plus} onClick={plusItem}></button>
          <div className={classes.cart_price}>{item.price}</div>
        </div>
      </div>
      <a className={classes.cart_image} href={`/items/${item.id}`}>
        <img src={item.image} alt={item.title} />
      </a>
      <span
        role='button'
        className={classes.cart_item_delete}
        onClick={deleteItem}
      >
        <span></span>
        <span></span>
      </span>
    </div>
  );
};

const Empty: React.FC = () => {
  return (
    <div className={classes.title}>
      <img className={classes.cart} src={Cart} alt='' />
      <div className={classes.text}>
        Добавьте товар в корзину <br />У нас все очень вкусное.{' '}
      </div>
    </div>
  );
};

export { RightNav };
