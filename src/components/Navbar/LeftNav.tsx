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
        <Link title={'Роллы'} img={roll} />
        <Link title={'Суши'} img={sushi} />
        <Link title={'Сеты'} img={set} />
        <Link title={'Закуски'} img={burr} />
        <Link title={'Напитки'} img={drinks} />
        <Link title={'Соусы'} img={sia} />
      </div>
    </aside>
  );
};

type LinkProps = {
  title: string;
  img: string;
};

const Link: React.FC<LinkProps> = ({ title, img }) => {
  return (
    <div className={classes.aside_link}>
      <img src={img} alt='' />
      <span className={classes.link_title}>{title}</span>
    </div>
  );
};

export { LeftNav };
