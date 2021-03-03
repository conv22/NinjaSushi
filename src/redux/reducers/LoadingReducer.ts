//Types

export const LOADING_CART = 'LOADING_CART';
export const LOADING_PRODUCT = 'LOADING_PRODUCT';
export const LOADING_MAIN = 'LOADING_MAIN';
export const UNLOAD_CART = 'UNLOAD_CART';
export const UNLOAD_PRODUCT = 'UNLOAD_PRODUCT';
export const UNLOAD_MAIN = 'UNLOAD_MAIN';

type initialStateType = {
  cart: boolean;
  product: boolean;
  main: boolean;
};

type setLoadingType = {
  type: typeof LOADING_CART | typeof LOADING_MAIN | typeof LOADING_PRODUCT;
};
type unsetLoadingType = {
  type: typeof UNLOAD_CART | typeof UNLOAD_MAIN | typeof UNLOAD_PRODUCT;
};

type loadingActions = setLoadingType | unsetLoadingType;

//Reducer

const initialState: initialStateType = {
  cart: false,
  product: false,
  main: false,
};

const LoadingReducer = (
  state = initialState,
  action: loadingActions
): initialStateType => {
  switch (action.type) {
    case LOADING_CART: {
      return {
        ...state,
        cart: true,
      };
    }
    case LOADING_MAIN: {
      return {
        ...state,
        main: true,
      };
    }
    case LOADING_PRODUCT: {
      return {
        ...state,
        product: true,
      };
    }
    case UNLOAD_CART: {
      return {
        ...state,
        cart: false,
      };
    }
    case UNLOAD_PRODUCT: {
      return {
        ...state,
        product: false,
      };
    }
    case UNLOAD_MAIN: {
      return {
        ...state,
        main: false,
      };
    }
    default:
      return state;
  }
};

export default LoadingReducer;

// Actions

export const setLoadingAction = (
  type: typeof LOADING_CART | typeof LOADING_MAIN | typeof LOADING_PRODUCT
): setLoadingType => {
  return {
    type,
  };
};

export const unLoadingAction = (
  type: typeof UNLOAD_CART | typeof UNLOAD_MAIN | typeof UNLOAD_PRODUCT
): unsetLoadingType => {
  return {
    type,
  };
};
