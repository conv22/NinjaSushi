import {
  LOAD_MENU,
  SELECT_CATEGORY,
  SELECT_ITEM,
  menuActionTypes,
  initialStateType,
} from '../menu/types';

const initialState: initialStateType = {
  menu: null,
  selectedItem: null,
  selectedCategory: null,
  loading: false,
  error: null,
};

const MenuReducer = (
  state = initialState,
  action: menuActionTypes
): initialStateType => {
  switch (action.type) {
    case LOAD_MENU: {
      return {
        ...state,
        menu: action.payload,
      };
    }
    case SELECT_ITEM: {
      return {
        ...state,
        selectedItem: action.payload,
      };
    }
    case SELECT_CATEGORY: {
      return {
        ...state,
        selectedCategory: action.payload,
      };
    }
    default:
      return state;
  }
};

export default MenuReducer;
