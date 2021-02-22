import React from 'react';
import { useDispatch } from 'react-redux';
import { LoadMenuThunk } from '../redux/menu/actions';
import { Slider } from '../components/Slider';
import { Menu } from '../components/Menu/Menu';
import classes from './MainPage.module.scss';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(LoadMenuThunk());
  }, [dispatch]);
  return (
    <>
      <Slider />
      <Menu />
    </>
  );
};

export default MainPage;
