// Types
type initialStateType = {
  modalType: null | string;
  modalText: null | string;
};

const SHOW_POPUP = 'SHOW_POPUP';
const HIDE_POPUP = 'HIDE_POPUP';

type showActionType = {
  type: typeof SHOW_POPUP;
  payload: {
    modalType: 'error' | 'success';
    modalText: string;
  };
};

type hideActionType = {
  type: typeof HIDE_POPUP;
};

type PopUpActionTypes = showActionType | hideActionType;
// Reducer

const initialState: initialStateType = {
  modalType: null,
  modalText: null,
};

const PopUpReducer = (
  state = initialState,
  action: PopUpActionTypes
): initialStateType => {
  switch (action.type) {
    case SHOW_POPUP: {
      return {
        modalType: action.payload.modalType,
        modalText: action.payload.modalText,
      };
    }
    case HIDE_POPUP: {
      return initialState;
    }
    default:
      return state;
  }
};

export default PopUpReducer;

//Actions

export const showPopUpAction = (
  type: 'error' | 'success',
  text: string
): showActionType => {
  return {
    type: SHOW_POPUP,
    payload: { modalText: text, modalType: type },
  };
};

export const hidePopUpAction = (): hideActionType => {
  return {
    type: HIDE_POPUP,
  };
};
