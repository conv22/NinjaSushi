import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';
import { auth } from './firebase';
import MainPage from './Pages/MainPage/MainPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import Navbar from './components/Navbar/Navbar';
import MainLoader from './components/Loaders/MainLoader';
import PopUp from './components/PopUp/PopUp';
import { loadProfile } from './redux/profile/actions';
import { RootState } from './redux/reducers/RootReducer';

const App: React.FC = () => {
  const isLogged = useSelector((state: RootState) => state.profile.loggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(loadProfile(user));
      }
    });
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/items/:id' component={ProductPage} />
        <Route path='/categories/:category' component={CategoryPage} />
        <Route
          path='/profile'
          exact
          render={() => (isLogged ? <ProfilePage /> : <Redirect to='/' />)}
        />
        <Redirect to='/' />
      </Switch>
      <PopUp />
      <MainLoader />
    </>
  );
};

export { App };
