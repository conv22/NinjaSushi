import { LOAD_MENU, MenuActionTypes, MenuState } from '../menu/types';

const initialState: MenuState = {
  items: [],
};

const MenuReducer = (
  state = initialState,
  action: MenuActionTypes
): MenuState => {
  switch (action.type) {
    case LOAD_MENU: {
      return {
        items: [...state.items, ...action.payload],
      };
    }
    default:
      return state;
  }
};

export { MenuReducer };
