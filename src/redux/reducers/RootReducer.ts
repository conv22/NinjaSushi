import { combineReducers } from 'redux';
import ProfileReducer from './ProfileReducer';
import MenuReducer from './MenuReducer';
import CartReducer from './CartReducer';
import PopUpReducer from './PopUpReducer';

export const RootReducer = combineReducers({
  profile: ProfileReducer,
  menu: MenuReducer,
  cart: CartReducer,
  popup: PopUpReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
