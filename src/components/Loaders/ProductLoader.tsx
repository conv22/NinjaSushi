import React from 'react';
import classes from './Loaders.module.scss';

const ProductLoader: React.FC = () => {
  return (
    <div className={classes.cart_wrapper}>
      <div className={classes.product_loader}></div>
    </div>
  );
};

export default ProductLoader;
