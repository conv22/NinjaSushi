import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { loadMenuCategoryThunkAction } from '../../redux/menu/actions';
import { RootState } from '../../redux/reducers/RootReducer';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import ProductLoader from '../../components/Loaders/ProductLoader';
import SortComponent from '../../components/Sort/SortComponent';
import Item from '../../components/Menu/MenuItem';
import classes from './CategoryPage.module.scss';

type RouteParams = {
  category: string;
};

const CategoryPage: React.FC<RouteComponentProps<RouteParams>> = ({
  match,
}) => {
  const dispatch = useDispatch();
  const { category } = match.params;
  const items = useSelector((state: RootState) => state.menu.selectedCategory);
  const loading = useSelector((state: RootState) => state.loading.product);
  useEffect(() => {
    dispatch(loadMenuCategoryThunkAction(category));
  }, [dispatch, category]);
  if (loading) {
    return (
      <div className={`${classes.category_container} ${classes.loader}`}>
        <ProductLoader />
      </div>
    );
  }
  if (!items || items === null) {
    return <h1> Nothing found</h1>;
  }
  return (
    <div className={classes.category_container}>
      <BreadCrumb category={category} title={items[0].category_name} />
      <div className={classes.header}>
        <h2 className={classes.h2}>{items[0].category_name}</h2>
        <SortComponent />
      </div>
      <div className={classes.items_container}>
        {items &&
          items.map(item => {
            return (
              <Item
                image={item.image}
                id={item.id}
                weight={item.weight}
                description={item.description}
                title={item.title}
                price={item.price}
                key={item.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CategoryPage;
