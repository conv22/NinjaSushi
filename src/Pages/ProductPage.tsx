import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { RootState } from '../redux/reducers/RootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { loadMenuItemThunkAction } from '../redux/menu/actions';
import { ingridientType } from '../redux/menu/types';
import classes from './ProductPage.module.scss';

type RouteParams = {
  category: string;
  id: string;
};

const ProductPage: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const dispatch = useDispatch();
  const item = useSelector((state: RootState) => state.menu.selectedItem);
  const { id } = match.params;
  useEffect(() => {
    dispatch(loadMenuItemThunkAction(id));
  }, [dispatch, id]);
  if (!item) {
    return <h1>No item</h1>;
  }

  return (
    <div className={classes.product_container}>
      <div className={classes.image}>
        <img src={item!.image} alt={item!.title} />
      </div>
      <div className={classes.content}>
        <div className={classes.title}>{item!.title}</div>
        <div className={classes.weight}>
          <span>{item!.weight}</span>
        </div>
        <div className={classes.ingridients}>
          <span className={classes.small}>Состав</span>
          {item.ingridients ? (
            <div className={classes.ingridients_list}>
              {item.ingridients.map(item => {
                return (
                  <div className={classes.list_item} key={item.id}>
                    <div className={classes.item_image}>
                      <img src={item.image} alt={item.title} />
                    </div>
                    {item.title}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
