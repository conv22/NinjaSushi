import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { RootState } from '../redux/reducers/RootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { LoadItemThunk } from '../redux/menu/actions';

type RouteParams = {
  category: string;
  id: string;
};

const ProductPage: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const dispatch = useDispatch();
  const item = useSelector((state: RootState) => state.menu.selectedItem);
  const { id } = match.params;
  useEffect(() => {
    dispatch(LoadItemThunk(id));
  }, [dispatch, id]);
  return <h1> Product page</h1>;
};

export default ProductPage;
