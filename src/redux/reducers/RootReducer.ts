import { combineReducers } from 'redux';
import ProfileReducer from './ProfileReducer';
import MenuReducer from './MenuReducer';
import CartReducer from './CartReducer';

export const RootReducer = combineReducers({
  profile: ProfileReducer,
  menu: MenuReducer,
  cart: CartReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
