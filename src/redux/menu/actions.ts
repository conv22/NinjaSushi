import { AppThunk } from '../store';
import { db } from '../../firebase';
import { LOAD_MENU, Item, Ingridient, MenuActionTypes } from './types';
import { DocumentData } from '@firebase/firestore-types';
export const LoadMenuThunk = (): AppThunk => async dispatch => {
  const menuItems = db.collection('menu');
  const snapshot = await menuItems.get();
  let items: Item[] = [];
  snapshot.docs.forEach((item: DocumentData): void => {
    items.push(item.data());
  });
  dispatch(LoadMenuAction(items));
};

const LoadMenuAction = (items: Item[]): MenuActionTypes => {
  return {
    type: LOAD_MENU,
    payload: items,
  };
};
