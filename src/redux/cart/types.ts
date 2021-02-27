import { Item } from '../menu/types';

export interface cartItem extends Item {
  quantity: number;
}

export type cartState = {
  items: cartItem[];
};

export const CART_ADD = 'CART_ADD';
export const CART_CHANGE = 'CART_CHANGE';
export const CART_DELETE = 'CART_DELETE';

export type AddAction = {
  type: typeof CART_ADD;
  payload: cartItem;
};

export type ChangeAction = {
  type: typeof CART_CHANGE;
  payload: {
    id: string;
    quantity: number;
  };
};
export type CartDeleteAction = {
  type: typeof CART_DELETE;
  payload: string;
};

export type CartActionTypes = CartDeleteAction | ChangeAction | AddAction;
