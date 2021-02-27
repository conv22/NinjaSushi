import React from 'react';
import { useDispatch } from 'react-redux';
import { LoadMenuThunk } from '../redux/menu/actions';
import { Slider } from '../components/Slider';
import { Menu } from '../components/Menu/Menu';
import classes from './MainPage.module.scss';
import AuthModal from '../components/Auth/AuthModal';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(LoadMenuThunk());
  }, [dispatch]);
  return (
    <>
      <Slider />
      <Menu />
      <AuthModal />
    </>
  );
};

export default MainPage;
