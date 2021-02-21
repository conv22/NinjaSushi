import { combineReducers } from 'redux';
import { MenuReducer } from './MenuReducer';

export const RootReducer = combineReducers({
  menu: MenuReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
