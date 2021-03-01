import {
  LOAD_MENU,
  loadMenuType,
  menuItem,
  selectMenuItem,
  SELECT_ITEM,
  selectMenuCategory,
  SELECT_CATEGORY,
  ingridientType,
} from './types';
import { AppThunk } from '../store';
import { db } from '../../firebase';

export const loadMenuThunkAction = (): AppThunk => (dispatch, getState) => {
  if (getState().menu.menu === null) {
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
      .then(() => dispatch(loadMenuAction(items)))
      .catch(err => {
        alert(err);
      });
  }
};

export const loadMenuCategoryThunkAction = (
  category: string
): AppThunk => dispatch => {
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
    .then(() => dispatch(loadCategoryAction(items)))
    .catch(error => {
      console.log('Error getting documents: ', error);
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
