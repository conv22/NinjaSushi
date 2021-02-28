import { combineReducers } from 'redux';
import ProfileReducer from './ProfileReducer';
import MenuReducer from './MenuReducer';

export const RootReducer = combineReducers({
  profile: ProfileReducer,
  menu: MenuReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
