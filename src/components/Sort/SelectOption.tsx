import React from 'react';
import { filterOptions } from '../../redux/menu/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from '../../Pages/CategoryPage/CategoryPage.module.scss';

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

export default SelectOption;
