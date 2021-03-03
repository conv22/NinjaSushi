import { combineReducers } from 'redux';
import ProfileReducer from './ProfileReducer';
import MenuReducer from './MenuReducer';
import CartReducer from './CartReducer';
import PopUpReducer from './PopUpReducer';
import LoadingReducer from './LoadingReducer';

export const RootReducer = combineReducers({
  profile: ProfileReducer,
  menu: MenuReducer,
  cart: CartReducer,
  popup: PopUpReducer,
  loading: LoadingReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
