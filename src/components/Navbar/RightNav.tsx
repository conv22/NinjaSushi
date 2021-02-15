import React from 'react';
import classes from './RightNav.module.scss';
import Cart from '../../assets/images/icons/cart.svg';

const RightNav: React.FC = () => {
  return (
    <aside>
      <div className={classes.aside}>
        <div className={classes.title}>
          <img className={classes.cart} src={Cart} alt='' />
          <div className={classes.text}>
            Добавьте товар в корзину <br />У нас все очень вкусное.{' '}
          </div>
        </div>
        <div className={classes.links}>
          <a href='/' className={classes.link}>
            Роллы
          </a>
          <a href='/' className={classes.link}>
            Суши
          </a>
          <a href='/' className={classes.link}>
            Сеты
          </a>
          <a href='/' className={classes.link}>
            Закуски
          </a>
          <a href='/' className={classes.link}>
            Напитки
          </a>
          <a href='/' className={classes.link}>
            Соусы
          </a>
        </div>
        <div className={classes.order_message}>
          <a href='/' className={classes.order_button}>
            История заказов
          </a>
        </div>
      </div>
    </aside>
  );
};

export { RightNav };
