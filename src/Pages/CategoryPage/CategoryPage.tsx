import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import {
  loadMenuCategoryThunkAction,
  sortMenuThunk,
} from '../../redux/menu/actions';
import { RootState } from '../../redux/reducers/RootReducer';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import ProductLoader from '../../components/Loaders/ProductLoader';
import { filterOptions } from '../../redux/menu/types';
import { RowItem } from '../../components/Menu/MenuRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faArrowUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
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

type optionsType = {
  id: number;
  opt: filterOptions;
  title: string;
  icon?: any;
};

const options: optionsType[] = [
  {
    id: 0,
    opt: 'price_up',
    title: 'Цена',
    icon: faArrowUp,
  },
  {
    id: 1,
    opt: 'price_down',
    title: 'Цена',
    icon: faArrowDown,
  },
  {
    id: 2,
    opt: 'title',
    title: 'Название',
  },
  {
    id: 3,
    opt: 'weight_up',
    title: 'Вес',
    icon: faArrowUp,
  },
  {
    id: 4,
    opt: 'weight_down',
    title: 'Вес',
    icon: faArrowDown,
  },
];

const SortComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Фильтр');
  const clickHandler = (option: filterOptions, title: string) => {
    setSelected(title);
    dispatch(sortMenuThunk(option));
  };
  const toggle = () => setOpen(!open);
  return (
    <div className={classes.sort}>
      <div className={classes.small}>Сортировка по</div>
      <div
        onClick={toggle}
        className={open ? `${classes.select} ${classes.show}` : classes.select}
      >
        <div className={classes.select_name}>
          {selected}
          <span className={classes.select_name_icon}>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </div>
        <div className={classes.select_dropdown}>
          {options.map(option => {
            return (
              <SelectOption
                key={option.id}
                opt={option.opt}
                icon={option.icon}
                title={option.title}
                clickHandler={clickHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

type selectOptionProps = {
  clickHandler(opt: filterOptions, title: string): void;
  icon?: any;
  title: string;
  opt: filterOptions;
};

const SelectOption: React.FC<selectOptionProps> = ({
  clickHandler,
  icon,
  title,
  opt,
}) => {
  return (
    <div
      className={classes.select_option}
      onClick={() => clickHandler(opt, title)}
    >
      {icon && (
        <span className={classes.option_icon}>
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      {title}
    </div>
  );
};
export default CategoryPage;
