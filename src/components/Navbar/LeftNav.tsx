import React from 'react';
import { Link } from 'react-router-dom';
import roll from '../../assets/images/icons/sidenav/roll.svg';
import sushi from '../../assets/images/icons/sidenav/sushi.svg';
import set from '../../assets/images/icons/sidenav/set.svg';
import drinks from '../../assets/images/icons/sidenav/drinks.svg';
import sia from '../../assets/images/icons/sidenav/sia.svg';
import classes from './LeftNav.module.scss';

const LeftNav: React.FC = () => {
  return (
    <div className={classes.aside}>
      <LinkComponent title={'Роллы'} url={'roll'} img={roll} />
      <LinkComponent title={'Суши'} url={'sushi'} img={sushi} />
      <LinkComponent title={'Сеты'} url={'set'} img={set} />
      <LinkComponent title={'Напитки'} url={'drink'} img={drinks} />
      <LinkComponent title={'Соусы'} url={'sauces'} img={sia} />
    </div>
  );
};

type LinkProps = {
  title: string;
  img: string;
  url: string;
};

const LinkComponent: React.FC<LinkProps> = ({ title, img, url }) => {
  return (
    <Link className={classes.aside_link} to={`/categories/${url}`}>
      <div className={classes.link_container}>
        <img src={img} alt='' />
        <span className={classes.link_title}>{title}</span>
      </div>
    </Link>
  );
};

export default LeftNav;
