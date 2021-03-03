import { menuItem } from '../menu/types';

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CHANGE_ITEM = 'CHANGE_ITEM';
export const CREATE_ORDER = 'CREATE_ORDER';

export interface CartItem extends menuItem {
  quantity: number;
}

export type initialStateType = {
  items: CartItem[];
};

export type addItemActionType = {
  type: typeof ADD_ITEM;
  payload: CartItem;
};

export type deleteItemActionType = {
  type: typeof DELETE_ITEM;
  payload: string;
};

export type changeItemActionType = {
  type: typeof CHANGE_ITEM;
  payload: {
    id: string;
    quantity: number;
  };
};

export type createOrderActionType = {
  type: typeof CREATE_ORDER;
};

export type cartActionTypes =
  | addItemActionType
  | deleteItemActionType
  | changeItemActionType
  | createOrderActionType;
