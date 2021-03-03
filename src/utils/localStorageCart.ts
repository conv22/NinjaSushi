import { CartItem } from '../redux/cart/types';

export const loadLS = (): CartItem[] | [] => {
  try {
    const initialState = localStorage.getItem('cartItems');
    if (initialState === null) {
      return [];
    }
    return JSON.parse(initialState);
  } catch (err) {
    return [];
  }
};

export const setLS = (items: CartItem[]): void => {
  localStorage.setItem('cartItems', JSON.stringify(items));
};

export const removeLs = (): void => {
  localStorage.removeItem('cartItems');
};
