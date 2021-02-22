import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { LeftNav } from './components/Navbar/LeftNav';
import { RightNav } from './components/Navbar/RightNav';
import { auth } from './firebase';
import './App.scss';
import MainPage from './Pages/MainPage';
import ProductPage from './Pages/ProductPage';
import CategoryPage from './Pages/CategoryPage';

const App: React.FC = () => {
  // useEffect(() => {
  //   auth.onAuthStateChanged(userAuth => console.log(userAuth));
  // }, []);
  return (
    <Router>
      <Navbar />
      <LeftNav />
      <RightNav />
      <Route path='/' exact component={MainPage} />
      <Route path='/:category/' component={CategoryPage} />
      <Route path='/:category/:id' component={ProductPage} />
    </Router>
  );
};

export { App };
