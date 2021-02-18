import React, { useState } from 'react';
import { LeftNav } from '../components/Navbar/LeftNav';
import { RightNav } from '../components/Navbar/RightNav';
import { Slider } from '../components/Slider';
import { Menu } from '../components/Menu/Menu';
import { db } from '../firebase';
import classes from './MainPage.module.scss';

const MainPage: React.FC = () => {
  const [items, setItems] = useState<any>([]);
  const fetchItems = async () => {
    const response = db.collection('sushi');
    const data = await response.get();
    data.docs.forEach(item => {
      setItems([...items, item.data()]);
    });
  };
  React.useEffect(() => {
    fetchItems();
  }, []);
  React.useEffect(() => {
    console.log(items);
  }, [items]);

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
