import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { LoadCategoryThunk } from '../redux/menu/actions';
import { RootState } from '../redux/reducers/RootReducer';

type RouteParams = {
  category: string;
};

const CategoryPage: React.FC<RouteComponentProps<RouteParams>> = ({
  match,
}) => {
  const dispatch = useDispatch();
  const categoryItems = useSelector(
    (state: RootState) => state.menu.selectedCategory
  );
  const { category } = match.params;
  useEffect(() => {
    dispatch(LoadCategoryThunk(category));
  }, [dispatch, category]);
  return <h1>Category</h1>;
};

export default CategoryPage;
