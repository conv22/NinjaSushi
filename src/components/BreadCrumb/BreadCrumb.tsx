import React from 'react';
import classes from './BreadCrumb.module.scss';

type BreadCrumbProps = {
  item?: string;
  category: string;
  title: string;
};

const BreadCrumb: React.FC<BreadCrumbProps> = ({ item, category, title }) => {
  if (!item) {
    return (
      <div className={classes.breadcrumb}>
        <a href='/' className={classes.link}>
          Главная
        </a>
        <span className={`${classes.link} ${classes.active}`}>{title}</span>
      </div>
    );
  }
  return (
    <div className={classes.breadcrumb}>
      <a href='/' className={classes.link}>
        Главная
      </a>
      <a href={`/categories/${category}`} className={classes.link}>
        {title}
      </a>

      <span className={`${classes.link} ${classes.active}`}>{item}</span>
    </div>
  );
};

export default BreadCrumb;
