import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import RightNav from './RightNav';
import LeftNav from './LeftNav';
import AuthModal from './../Auth/AuthModal';
import { RootState } from '../../redux/reducers/RootReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import people from '../../assets/images/icons/people.svg';
import cart from '../../assets/images/icons/cart-icon.svg';
import classes from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const history = useHistory();
  const isLogged = useSelector((state: RootState) => state.profile.loggedIn);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const itemCount = cartItems.reduce((acc, value) => {
    return acc + value.quantity;
  }, 0);
  const [showCart, setShowCart] = useState(false);
  const [modal, setModal] = useState(false);
  const closeCart = () => {
    setShowCart(false);
  };
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
                <FontAwesomeIcon icon={faHome} />
                <span className={classes.link_link_text}>Главная</span>
              </NavLink>
            </li>
            <li className={classes.link}>
              <div
                role='button'
                className={classes.link_link}
                onClick={() =>
                  isLogged ? history.push('/profile') : setModal(true)
                }
              >
                <img src={people} alt='' />
                <span className={classes.link_link_text}>Личный кабинет</span>
              </div>
            </li>
            <li className={classes.link}>
              <div
                role='button'
                onClick={() => setShowCart(true)}
                className={classes.cart}
              >
                <img src={cart} alt='cart' />
                <span className={classes.cart_num}>{itemCount}</span>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <AuthModal setModal={setModal} modal={modal} />
      <RightNav close={closeCart} open={showCart} />
      <LeftNav />
    </>
  );
};

export default Navbar;
