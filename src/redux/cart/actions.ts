import {
  CART_ADD,
  CART_CHANGE,
  CART_DELETE,
  CartActionTypes,
  cartItem,
} from './types';

const CartDeleteAction = (id: string): CartActionTypes => {
  return {
    type: CART_DELETE,
    payload: id,
  };
};

const CartChangeAction = (id: string, quantity: number): CartActionTypes => {
  return {
    type: CART_CHANGE,
    payload: {
      id,
      quantity,
    },
  };
};

const CartAddAction = (item: cartItem): CartActionTypes => {
  return {
    type: CART_ADD,
    payload: item,
  };
};
