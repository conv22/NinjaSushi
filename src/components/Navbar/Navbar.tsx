import React, { useState } from 'react';
import classes from './Navbar.module.scss';
import people from '../../assets/images/icons/people.svg';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <div className={classes.ninja_logo}></div>
          <ul className={classes.links_list}>
            <li className={classes.link}>
              <NavLink
                className={`${classes.link_link} ${classes.active}`}
                to='/'
              >
                Главная
              </NavLink>
            </li>
            <li className={classes.link}>
              <NavLink className={classes.link_link} to='/menu'>
                Меню
              </NavLink>
            </li>
          </ul>
          <div
            role='button'
            className={classes.register}
            onClick={() => setModal(true)}
          >
            <img src={people} alt='' />
            <button className={classes.register_button}>Личный кабинет</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export { Navbar };
