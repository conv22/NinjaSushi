import React from 'react';
import classes from './Navbar.module.scss';
import tel from '../../assets/images/icons/phone.svg';
import heart from '../../assets/images/icons/heart.svg';
import people from '../../assets/images/icons/people.svg';
import { LeftNav } from './LeftNav';
import { RightNav } from './RightNav';

const Navbar: React.FC = () => {
  return (
    <>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <div className={classes.ninja_logo}></div>
          <ul className={classes.links_list}>
            <li className={classes.link}>Главная</li>
            <li className={classes.link}>Меню</li>
            <li className={classes.link}>Доставка</li>
            <li className={classes.link}>Клиентам</li>
            <li className={classes.link}>Новости</li>
          </ul>
          <div className={classes.tel}>
            <img src={tel} className={classes.icon} alt='' />
            <span className={classes.title}>8-800-8000-8000</span>
            <div className={classes.tel_wrapper}>
              <span className={classes.small}>Оформить заказ</span>
              <a className={classes.tel_phone} href='/'>
                8-800-8000-8000
              </a>
              <a className={classes.tel_phone} href='/'>
                8-800-8000-8000
              </a>
              <span className={classes.small}>С 11:00 до 22:45</span>
            </div>
          </div>
          <div className={classes.fav}>
            <img src={heart} className={classes.icon} alt='' />
            <span className={classes.title}>Избранное</span>
            <div className={classes.fav_wrapper}>
              <a href='/' className={classes.fav_title}>
                <img src={heart} alt='' /> <span>Избранное</span>
              </a>
              <div className={classes.notes}>
                Для просмотра избранных товаров вам нужно авторизоваться
              </div>
              <span className={classes.log_text}>Авторизиуйтесь на сайте</span>
              <div role='button' className={classes.logbtn}>
                Войти
              </div>
              <div role='button' className={classes.registerbtn}>
                Зарегистрироваться
              </div>
            </div>
          </div>
          <div className={classes.account}>
            <img src={people} className={classes.icon} alt='' />
            <span className={classes.title}>Личный кабинет</span>
            <div className={classes.account_wrapper}>
              <div className={classes.account_title}>
                <img src={people} className={classes.icon} alt='' />
                <span className={classes.account_lk}>Личный кабиент</span>{' '}
              </div>
              <span className={classes.log_text}>Авторизируйтесь</span>
              <div role='button' className={classes.logbtn}>
                Войти
              </div>
              <div role='button' className={classes.registerbtn}>
                Зарегистрироваться
              </div>
            </div>
          </div>
          <div className={classes.hamburger}>
            <span></span> <span></span> <span></span> <span></span>
          </div>
        </nav>
      </header>
      <LeftNav />
      <RightNav />
    </>
  );
};
export { Navbar };
