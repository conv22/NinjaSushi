import {
  ADD_ITEM,
  CHANGE_ITEM,
  DELETE_ITEM,
  CREATE_ORDER,
  deleteItemActionType,
  changeItemActionType,
  addItemActionType,
  CartItem,
  createOrderActionType,
} from './types';
import {
  LOADING_CART,
  UNLOAD_CART,
  setLoadingAction,
  unLoadingAction,
} from '../reducers/LoadingReducer';
import { db } from '../../firebase';
import { showPopUpAction } from '../reducers/PopUpReducer';
import { removeLs } from '../../utils/localStorageCart';
import { AppThunk } from '../store';

export const addItemThunkAction = (id: string): AppThunk => (
  dispatch,
  getState
) => {
  dispatch(setLoadingAction(LOADING_CART));
  const items = getState().cart.items;
  const findItem = items.find(x => x.id === id);
  if (findItem) {
    dispatch(unLoadingAction(UNLOAD_CART));
    dispatch(showPopUpAction('success', 'Товар добавлен в корзину'));
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
        dispatch(unLoadingAction(UNLOAD_CART));
        dispatch(showPopUpAction('success', 'Товар добавлен в корзину'));
        dispatch(addItemAction(item));
      })
      .catch(() => {
        dispatch(unLoadingAction(UNLOAD_CART));
        dispatch(showPopUpAction('error', 'Что-то пошло не так'));
      });
  }
};

export const changeQuantityActionThunk = (
  quantity: number,
  id: string
): AppThunk => (dispatch, getState) => {
  dispatch(changeItemAction(id, quantity));
  const item = getState().cart.items.find(item => item.id === id);
  if (item!.quantity < 1) {
    dispatch(deleteItemAction(id));
  }
};

export const createOrderActionThunk = (address: string): AppThunk => (
  dispatch,
  getState
) => {
  dispatch(setLoadingAction(LOADING_CART));
  const items = getState().cart.items;
  let newItems = items.map(item => item.title);
  db.collection('orders')
    .add({
      address,
      newItems,
    })
    .then(() => {
      dispatch(unLoadingAction(UNLOAD_CART));
      dispatch(showPopUpAction('success', 'Заказ сделан'));
      removeLs();
      dispatch(createOrderAction());
    })
    .catch(() => {
      dispatch(unLoadingAction(UNLOAD_CART));
      dispatch(showPopUpAction('error', 'Что-то пошло не так'));
    });
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

export const createOrderAction = (): createOrderActionType => {
  return {
    type: CREATE_ORDER,
  };
};
