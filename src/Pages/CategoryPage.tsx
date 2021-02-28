import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { RootState } from '../redux/reducers/RootReducer';

type RouteParams = {
  category: string;
};

const CategoryPage: React.FC<RouteComponentProps<RouteParams>> = ({
  match,
}) => {
  return <h1>Category</h1>;
};

export default CategoryPage;
