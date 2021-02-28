import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { RootState } from '../redux/reducers/RootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { loadMenuItemThunkAction } from '../redux/menu/actions';

type RouteParams = {
  category: string;
  id: string;
};

const ProductPage: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  useEffect(() => {
    dispatch(loadMenuItemThunkAction(id));
  }, [dispatch, id]);
  const item = useSelector((state: RootState) => state.menu.selectedItem);

  return <h1> Product page</h1>;
};

export default ProductPage;
