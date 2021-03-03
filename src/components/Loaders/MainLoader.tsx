import React from 'react';
import { useSelector } from 'react-redux';
import Logo from '../../assets/images/icons/logo-loader.svg';
import { RootState } from '../../redux/reducers/RootReducer';
import classes from './Loaders.module.scss';

const MainLoader: React.FC = () => {
  const state = useSelector((state: RootState) => state.loading.main);
  return (
    <div
      className={state ? classes.wrapper : `${classes.wrapper} ${classes.end}`}
    >
      <div className={classes.animation}></div>
      <div className={classes.loader_logo}>
        <img src={Logo} alt='logo' />
      </div>
    </div>
  );
};

export default MainLoader;
