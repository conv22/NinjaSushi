import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { RootState } from '../redux/reducers/RootReducer';
import { useDispatch, useSelector } from 'react-redux';

type RouteParams = {
  category: string;
  id: string;
};

const ProductPage: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;

  return <h1> Product page</h1>;
};

export default ProductPage;
