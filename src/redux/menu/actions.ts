import { AppThunk } from '../store';
import { api } from '../../api/api';
import {
  LOAD_MENU,
  LOAD_ITEM,
  Item,
  Ingridient,
  MenuActionTypes,
  LOAD_CATEGORY,
} from './types';

export const LoadMenuThunk = (): AppThunk => async (dispatch, getState) => {
  let menuItems = getState().menu.items;
  if (menuItems.length > 0) {
    dispatch(LoadMenuAction(menuItems));
  } else {
    let items: Array<Item> = await api.getAllMenu();
    dispatch(LoadMenuAction(items));
  }
};

export const LoadItemThunk = (id: string): AppThunk => async (
  dispatch,
  getState
) => {
  let selectedItem = getState().menu.items.find(item => item.id === id);
  if (selectedItem) {
    dispatch(LoadItemAction(selectedItem));
  } else {
    let item: Item = await api.getItem(id);
    dispatch(LoadItemAction(item));
  }
};

export const LoadCategoryThunk = (title: string): AppThunk => async (
  dispatch,
  getState
) => {
  let selectedCategory = getState().menu.items.filter(
    item => item.category === title
  );
  if (selectedCategory.length > 0) {
    dispatch(LoadCategoryAction(selectedCategory));
  } else {
    let items: Array<Item> = await api.getCategory(title);
    dispatch(LoadCategoryAction(items));
  }
};

const LoadMenuAction = (items: Array<Item>): MenuActionTypes => {
  return {
    type: LOAD_MENU,
    payload: items,
  };
};

const LoadItemAction = (item: Item): MenuActionTypes => {
  return {
    type: LOAD_ITEM,
    payload: item,
  };
};

const LoadCategoryAction = (items: Array<Item>): MenuActionTypes => {
  return {
    type: LOAD_CATEGORY,
    payload: items,
  };
};
