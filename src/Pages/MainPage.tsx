import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Slider } from '../components/Slider';
import { Menu } from '../components/Menu/Menu';
import classes from './MainPage.module.scss';

const MainPage: React.FC = () => {
  return (
    <>
      <Slider />
      <Menu />
    </>
  );
};

export default MainPage;
