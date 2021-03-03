import {
  SELECT_ITEM,
  SELECT_CATEGORY,
  LOAD_MENU,
  loadMenuType,
  selectMenuItem,
  selectMenuCategory,
  ingridientType,
  menuItem,
} from './types';
import {
  setLoadingAction,
  unLoadingAction,
  LOADING_MAIN,
  UNLOAD_MAIN,
  LOADING_PRODUCT,
  UNLOAD_PRODUCT,
} from '../reducers/LoadingReducer';
import { AppThunk } from '../store';
import { db } from '../../firebase';

export const loadMenuThunkAction = (): AppThunk => (dispatch, getState) => {
  if (getState().menu.menu === null) {
    dispatch(setLoadingAction(LOADING_MAIN));
    let items: menuItem[] = [];
    db.collection('menu')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let item = doc.data() as menuItem;
          item.id = doc.id;
          items.push(item);
        });
      })
      .then(() => {
        dispatch(unLoadingAction(UNLOAD_MAIN));
        dispatch(loadMenuAction(items));
      })
      .catch(err => {
        dispatch(unLoadingAction(UNLOAD_MAIN));
        alert(err);
      });
  }
};

export const loadMenuCategoryThunkAction = (
  category: string
): AppThunk => dispatch => {
  dispatch(setLoadingAction(LOADING_PRODUCT));
  let items: menuItem[] = [];
  db.collection('menu')
    .where('category', '==', category)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        let item = doc.data() as menuItem;
        item.id = doc.id;
        items.push(item);
      });
    })
    .then(() => {
      dispatch(unLoadingAction(UNLOAD_PRODUCT));
      dispatch(loadCategoryAction(items));
    })
    .catch(error => {
      dispatch(unLoadingAction(UNLOAD_PRODUCT));
      alert(error);
    });
};

export const loadMenuItemThunkAction = (id: string): AppThunk => dispatch => {
  dispatch(setLoadingAction(LOADING_PRODUCT));
  let item: menuItem;
  let ingridients: ingridientType[] = [];
  db.collection('menu')
    .doc(id)
    .get()
    .then(snap => {
      item = snap.data() as menuItem;
      item.id = id;
    });
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

const loadCategoryAction = (items: menuItem[]): selectMenuCategory => {
  return {
    type: SELECT_CATEGORY,
    payload: items,
  };
};
