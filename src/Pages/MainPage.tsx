import React from 'react';
import { useDispatch } from 'react-redux';
import { LeftNav } from '../components/Navbar/LeftNav';
import { RightNav } from '../components/Navbar/RightNav';
import { Slider } from '../components/Slider';
import { Menu } from '../components/Menu/Menu';
import classes from './MainPage.module.scss';
import { LoadMenuThunk } from '../redux/menu/actions';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(LoadMenuThunk());
  }, [dispatch]);
  return (
    <>
      <LeftNav />
      <RightNav />
      <Slider />
      <Menu />
    </>
  );
};

export { MainPage };
