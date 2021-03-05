import {
  SELECT_ITEM,
  SELECT_CATEGORY,
  LOAD_MENU,
  FILTER,
  loadMenuType,
  selectMenuItem,
  selectMenuCategory,
  filterMenuCategory,
  filterOptions,
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
  db.collection('menu')
    .doc(id)
    .get()
    .then(querySnapshot => {
      item = querySnapshot.data() as menuItem;
      item.id = querySnapshot.id;
      const promises: any[] = [];
      if (item.ingridients) {
        item.ingridients.forEach(doc => {
          const ingridient = db.doc(`ingridients/${doc.id}`).get();
          promises.push(ingridient);
        });
      }
      return Promise.all(promises);
    })
    .then(snap => {
      const ingridients: ingridientType[] = [];
      snap.forEach(snap => {
        const data = snap.data() as ingridientType;
        data.id = snap.id;
        ingridients.push(data);
      });
      item.ingridients = ingridients;
      dispatch(unLoadingAction(UNLOAD_PRODUCT));
      dispatch(loadItemAction(item));
    })
    .catch(error => {
      dispatch(unLoadingAction(UNLOAD_PRODUCT));
      alert(error);
    });
};

//Sort actions

export const sortMenuThunk = (option: filterOptions): AppThunk => (
  dispatch,
  getState
) => {
  const items = getState().menu.selectedCategory;
  if (option === 'price_up') {
    dispatch(filterMenuAction([...items!].sort((a, b) => a.price - b.price)));
  }
  if (option === 'price_down') {
    dispatch(filterMenuAction([...items!].sort((a, b) => b.price - a.price)));
  }
  if (option === 'title') {
    dispatch(
      filterMenuAction(
        [...items!].sort((a, b) => a.title.localeCompare(b.title))
      )
    );
  }
  if (option === 'weight_up') {
    dispatch(filterMenuAction([...items!].sort((a, b) => a.weight - b.weight)));
  }
  if (option === 'weight_down') {
    dispatch(filterMenuAction([...items!].sort((a, b) => b.weight - a.weight)));
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

const loadCategoryAction = (items: menuItem[]): selectMenuCategory => {
  return {
    type: SELECT_CATEGORY,
    payload: items,
  };
};

const filterMenuAction = (items: menuItem[]): filterMenuCategory => {
  return {
    type: FILTER,
    payload: items,
  };
};
