import React from 'react';
import roll from '../../assets/images/icons/sidenav/roll.svg';
import sushi from '../../assets/images/icons/sidenav/sushi.svg';
import set from '../../assets/images/icons/sidenav/set.svg';
import burr from '../../assets/images/icons/sidenav/burr.svg';
import drinks from '../../assets/images/icons/sidenav/drinks.svg';
import sia from '../../assets/images/icons/sidenav/sia.svg';
import classes from './LeftNav.module.scss';

const LeftNav: React.FC = () => {
  return (
    <aside>
      <div className={classes.aside}>
        <div className={classes.aside_link}>
          <img src={roll} alt='' />
          <span className={classes.link_title}>Роллы</span>
        </div>
        <div className={classes.aside_link}>
          <img src={sushi} alt='' />
          <span className={classes.link_title}>Суши</span>
        </div>
        <div className={classes.aside_link}>
          <img src={set} alt='' />
          <span className={classes.link_title}>Сеты</span>
        </div>
        <div className={classes.aside_link}>
          <img src={burr} alt='' />
          <span className={classes.link_title}>Закуски</span>
        </div>
        <div className={classes.aside_link}>
          <img src={drinks} alt='' />
          <span className={classes.link_title}>Напитки</span>
        </div>
        <div className={classes.aside_link}>
          <img src={sia} alt='' />
          <span className={classes.link_title}>Соусы</span>
        </div>
      </div>
    </aside>
  );
};

export { LeftNav };
