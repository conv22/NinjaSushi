import {
  ProfileActionTypes,
  SET_ERROR_PROFILE,
  CLEAR_ERROR_PROFILE,
  LOAD_PROFILE,
  LOGOUT_PROFILE,
  InitialStateType,
} from '../profile/types';

const initialState: InitialStateType = {
  profile: null,
  error: null,
  loggedIn: false,
};

const ProfileReducer = (
  state = initialState,
  action: ProfileActionTypes
): InitialStateType => {
  switch (action.type) {
    case LOAD_PROFILE: {
      return {
        ...state,
        error: null,
        profile: action.payload,
        loggedIn: true,
      };
    }
    case LOGOUT_PROFILE: {
      return {
        ...state,
        profile: null,
        error: null,
        loggedIn: false,
      };
    }
    case CLEAR_ERROR_PROFILE: {
      return {
        ...state,
        error: null,
      };
    }
    case SET_ERROR_PROFILE: {
      return {
        ...state,
        profile: null,
        error: { msg: action.payload.msg, code: action.payload.code },
        loggedIn: false,
      };
    }
    default:
      return state;
  }
};

export default ProfileReducer;
