import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMenuCategoryThunkAction } from '../redux/menu/actions';
import { RouteComponentProps } from 'react-router-dom';
import { RootState } from '../redux/reducers/RootReducer';
import { RowItem } from '../components/Menu/MenuRow';
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
  useEffect(() => {
    dispatch(loadMenuCategoryThunkAction(category));
  }, [dispatch, category]);

  if (items && items === null) {
    return <h1> Nothing found</h1>;
  }
  return (
    <div className={classes.category_container}>
      <div className={classes.header}>
        <h2 className={classes.h2}>Роллы</h2>
        <SortComponent />
      </div>
      <div className={classes.items_container}>
        {items &&
          items.map(item => {
            return (
              <RowItem
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

const SortComponent: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.sort} onClick={() => setOpen(!open)}>
      <div className={classes.small}>Сортировка по</div>
      <div className={classes.select}>
        <div className={classes.select_name}></div>
        <div className={classes.select_dropdown}></div>
      </div>
    </div>
  );
};

export default CategoryPage;
