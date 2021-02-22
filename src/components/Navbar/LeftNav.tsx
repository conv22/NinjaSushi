import React from 'react';
import roll from '../../assets/images/icons/sidenav/roll.svg';
import sushi from '../../assets/images/icons/sidenav/sushi.svg';
import set from '../../assets/images/icons/sidenav/set.svg';
import burr from '../../assets/images/icons/sidenav/burr.svg';
import drinks from '../../assets/images/icons/sidenav/drinks.svg';
import sia from '../../assets/images/icons/sidenav/sia.svg';
import classes from './LeftNav.module.scss';
import { Link } from 'react-router-dom';

const LeftNav: React.FC = () => {
  return (
    <aside>
      <div className={classes.aside}>
        <LinkComponent title={'Роллы'} url={'rolls'} img={roll} />
        <LinkComponent title={'Суши'} url={'sushi'} img={sushi} />
        <LinkComponent title={'Сеты'} url={'sets'} img={set} />
        <LinkComponent title={'Напитки'} url={'drinks'} img={drinks} />
        <LinkComponent title={'Соусы'} url={'sauces'} img={sia} />
      </div>
    </aside>
  );
};

type LinkProps = {
  title: string;
  img: string;
  url: string;
};

const LinkComponent: React.FC<LinkProps> = ({ title, img, url }) => {
  return (
    <Link to={`/${url}`}>
      <div className={classes.aside_link}>
        <img src={img} alt='' />
        <span className={classes.link_title}>{title}</span>
      </div>
    </Link>
  );
};

export { LeftNav };
