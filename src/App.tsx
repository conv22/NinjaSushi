import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { LeftNav } from './components/Navbar/LeftNav';
import { RightNav } from './components/Navbar/RightNav';
import MainLoader from './components/Loaders/MainLoader';
import PopUp from './components/PopUp/PopUp';
import MainPage from './Pages/MainPage';
import ProductPage from './Pages/ProductPage';
import CategoryPage from './Pages/CategoryPage';
import { auth } from './firebase';
import { loadProfile } from './redux/profile/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(loadProfile(user));
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <Navbar />
      <LeftNav />
      <RightNav />
      <Route path='/' exact component={MainPage} />
      <Route path='/items/:id' component={ProductPage} />
      <Route path='/categories/:category' component={CategoryPage} />
      <PopUp />
      <MainLoader />
    </Router>
  );
};

export { App };
