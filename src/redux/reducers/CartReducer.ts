import {
  ADD_ITEM,
  DELETE_ITEM,
  CHANGE_ITEM,
  CREATE_ORDER,
  cartActionTypes,
  initialStateType,
} from '../cart/types';
import { loadLS } from '../../utils/localStorageCart';

const initialState: initialStateType = {
  items: loadLS(),
};

const CartReducer = (
  state = initialState,
  action: cartActionTypes
): initialStateType => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    }
    case CHANGE_ITEM: {
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: action.payload.quantity };
          }
          return item;
        }),
      };
    }
    case CREATE_ORDER: {
      return {
        ...state,
        items: [],
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
