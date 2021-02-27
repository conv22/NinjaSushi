import {
  CART_ADD,
  CART_CHANGE,
  CART_DELETE,
  cartState,
  CartActionTypes,
} from '../cart/types';

const initialState: cartState = {
  items: [],
};

const CartReducer = (
  state = initialState,
  action: CartActionTypes
): cartState => {
  switch (action.type) {
    case CART_ADD: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case CART_DELETE: {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
