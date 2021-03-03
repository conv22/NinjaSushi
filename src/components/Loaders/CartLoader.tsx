import React from 'react';
import classes from './Loaders.module.scss';

const CartLoader: React.FC = () => {
  return (
    <div className={classes.cart_wrapper}>
      <div className={classes.cart_loader}></div>
    </div>
  );
};

export default CartLoader;
