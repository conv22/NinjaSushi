import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { RootState } from '../../redux/reducers/RootReducer';
import { loadMenuItemThunkAction } from '../../redux/menu/actions';
import { addItemThunkAction } from '../../redux/cart/actions';
import Item from './ProductItem';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import ProductLoader from '../../components/Loaders/ProductLoader';
import classes from './ProductPage.module.scss';

type RouteParams = {
  category: string;
  id: string;
};

const ProductPage: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.loading.product);
  const item = useSelector((state: RootState) => state.menu.selectedItem);
  const { id } = match.params;
  const addItem = () => {
    dispatch(addItemThunkAction(item!.id));
  };
  useEffect(() => {
    dispatch(loadMenuItemThunkAction(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className={`${classes.container} ${classes.loader}`}>
        <ProductLoader />
      </div>
    );
  }
  if (!item) {
    return <h1>No item</h1>;
  }

  return (
    <div className={classes.container}>
      <BreadCrumb
        item={item.title}
        category={item.category}
        title={item.category_name}
      />
      <div className={classes.product}>
        <div className={classes.image}>
          <img className={classes.img} src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <div className={classes.title}>{item.title}</div>
          <div className={classes.weight}>{item.weight} г</div>
          <div className={classes.ingridients}>
            <span className={classes.small}>Состав</span>
            {item.ingridients && (
              <ul className={classes.list}>
                {item.ingridients.map(item => {
                  return (
                    <Item key={item.id} title={item.title} image={item.image} />
                  );
                })}
              </ul>
            )}
          </div>
          <div className={classes.price}>
            <span className={classes.price_button}>
              <button className={classes.button} onClick={addItem}>
                В корзину
              </button>
            </span>
            <span className={classes.price_price}>{item.price} руб</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
