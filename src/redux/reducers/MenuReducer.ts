import {
  LOAD_MENU,
  LOAD_ITEM,
  LOAD_CATEGORY,
  MenuActionTypes,
  MenuState,
} from '../menu/types';

const initialState: MenuState = {
  items: [],
  selectedCategory: [],
  selectedItem: null,
};

const MenuReducer = (
  state = initialState,
  action: MenuActionTypes
): MenuState => {
  switch (action.type) {
    case LOAD_MENU: {
      return {
        items: [...state.items, ...action.payload],
        selectedCategory: [],
        selectedItem: null,
      };
    }
    case LOAD_ITEM: {
      return {
        ...state,
        selectedItem: action.payload,
      };
    }
    case LOAD_CATEGORY: {
      return {
        ...state,
        selectedCategory: [...action.payload],
        selectedItem: null,
      };
    }
    default:
      return state;
  }
};

export { MenuReducer };
