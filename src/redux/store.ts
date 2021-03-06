import { createStore, compose, applyMiddleware, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { RootReducer, RootState } from './reducers/RootReducer';
import { setLS } from '../utils/localStorageCart';

const middleware = [thunk];

const store = createStore(
  RootReducer,
  compose(
    applyMiddleware(...middleware)
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    //   (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  setLS(store.getState().cart.items);
});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export { store };
