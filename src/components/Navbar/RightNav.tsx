import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeItemAction,
  deleteItemAction,
  createOrderActionThunk,
} from '../../redux/cart/actions';
import CartLoader from '../Loaders/CartLoader';
import { RootState } from '../../redux/reducers/RootReducer';
import { CartItem } from '../../redux/cart/types';
import Cart from '../../assets/images/icons/cart.svg';
import classes from './RightNav.module.scss';

const RightNav: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const loading = useSelector((state: RootState) => state.loading.cart);
  if (loading) {
    return (
      <div className={classes.aside}>
        <CartLoader />
      </div>
    );
  }

  return (
    <aside>
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
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const createOrder = () => {
    dispatch(createOrderActionThunk(input));
  };
  const totalPrice = (): number => {
    return items.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };
  return (
    <div className={classes.cart_items}>
      <h3>Ваш заказ</h3>
      <div className={classes.cart_list}>
        {items.map(item => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
      <div className={classes.cart_form}>
        <label htmlFor='address'>Адрес</label>
        <input
          type='text'
          placeholder='Адрес'
          className={classes.cart_form_input}
          name='address'
          required
          value={input}
          onChange={changeHandler}
        />
      </div>
      <div className={classes.cart_total}>
        <div className={classes.cart_total_price}>
          <span className={classes.cart_total_text}>Итого</span>
          <span className={classes.cart_total_rub}>{totalPrice()}руб</span>
        </div>
        <div className={classes.cart_total_button}>
          <button className={classes.order_button} onClick={createOrder}>
            Оформить заказ
          </button>
        </div>
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
          <div className={classes.cart_price}>{item.price * item.quantity}</div>
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
