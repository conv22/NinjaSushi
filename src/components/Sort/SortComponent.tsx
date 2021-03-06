import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortMenuThunk } from '../../redux/menu/actions';
import SelectOption from './SelectOption';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faArrowUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { filterOptions } from '../../redux/menu/types';
import classes from '../../Pages/CategoryPage/CategoryPage.module.scss';

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

export default SortComponent;

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
