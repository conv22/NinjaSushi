import React from 'react';
import classes from './ProductPage.module.scss';

type ItemProps = {
  image: string;
  title: string;
};
const Item: React.FC<ItemProps> = ({ image, title }) => {
  return (
    <li className={classes.item}>
      <div className={classes.item_image}>
        <img src={image} alt={title} />
      </div>
      <div className={classes.item_title}>{title}</div>
    </li>
  );
};
export default Item;
