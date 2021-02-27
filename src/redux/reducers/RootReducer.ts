import { combineReducers } from 'redux';
import MenuReducer from './MenuReducer';
import CartReducer from './CartReducer';

export const RootReducer = combineReducers({
  menu: MenuReducer,
  cart: CartReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
