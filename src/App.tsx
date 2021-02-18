import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { auth } from './firebase';
import './App.scss';
import { MainPage } from './Pages/MainPage';

const App: React.FC = () => {
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => console.log(userAuth));
  }, []);
  return (
    <>
      <Navbar />
      <MainPage />
    </>
  );
};

export { App };
