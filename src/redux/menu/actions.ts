import {
  LOAD_MENU,
  loadMenuType,
  menuItem,
  selectMenuItem,
  SELECT_ITEM,
} from './types';
import { AppThunk } from '../store';
import { db } from '../../firebase';

export const loadMenuThunkAction = (): AppThunk => async (
  dispatch,
  getState
) => {
  if (getState().menu.menu === null) {
    let items: menuItem[] = [];
    let collection = await db.collection('menu').get();
    collection.forEach(querySnapshot => {
      let item;
      item = querySnapshot.data() as menuItem;
      item.id = querySnapshot.id;
      items.push(item);
    });
    dispatch(loadMenuAction(items));
  }
};

export const loadMenuItemThunkAction = (id: string): AppThunk => (
  dispatch,
  getState
) => {
  if (getState().menu.menu !== null) {
    let item = getState().menu.menu!.find(item => item.id === id);
    if (item) {
      dispatch(loadItemAction(item));
    }
  } else {
    dispatch(loadMenuThunkAction());
    loadMenuItemThunkAction(id);
  }
};

//action creators

const loadMenuAction = (items: menuItem[]): loadMenuType => {
  return {
    type: LOAD_MENU,
    payload: items,
  };
};

const loadItemAction = (item: menuItem): selectMenuItem => {
  return {
    type: SELECT_ITEM,
    payload: item,
  };
};
