import {
  ADD_ITEM,
  CHANGE_ITEM,
  DELETE_ITEM,
  deleteItemActionType,
  changeItemActionType,
  addItemActionType,
  CartItem,
} from './types';
import { db } from '../../firebase';
import { AppThunk } from '../store';

export const addItemThunkAction = (id: string): AppThunk => (
  dispatch,
  getState
) => {
  const items = getState().cart.items;
  const findItem = items.find(x => x.id === id);
  if (findItem) {
    dispatch(changeItemAction(findItem.id, findItem.quantity + 1));
  } else {
    let item: CartItem;
    db.collection('menu')
      .doc(id)
      .get()
      .then(doc => {
        item = doc.data() as CartItem;
        item.id = doc.id;
        item.quantity = 1;
      })
      .then(() => {
        dispatch(addItemAction(item));
      });
  }
};

// Action creators

const addItemAction = (item: CartItem): addItemActionType => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const changeItemAction = (
  id: string,
  quantity: number
): changeItemActionType => {
  return {
    type: CHANGE_ITEM,
    payload: {
      id,
      quantity,
    },
  };
};

export const deleteItemAction = (id: string): deleteItemActionType => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};
