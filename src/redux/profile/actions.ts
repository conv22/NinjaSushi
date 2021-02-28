import { AppThunk } from '../store';
import {
  LOAD_PROFILE,
  loadProfileAction,
  Profile,
  logoutProfileAction,
  LOGOUT_PROFILE,
  createProfileError,
  SET_ERROR_PROFILE,
  clearProfileError,
  CLEAR_ERROR_PROFILE,
} from './types';
import { auth, GoogleProvider, FacebookProvider } from '../../firebase';

export const registerActionThunk = (credentials: {
  email: string;
  password: string;
}): AppThunk => dispatch => {
  auth
    .createUserWithEmailAndPassword(credentials.email, credentials.password)
    .then(userCredentials => {
      dispatch(errorClear());
      dispatch(loadProfile(userCredentials.user));
    })
    .catch(error => {
      const { code, message } = error;
      dispatch(errorCreator(message, code));
    });
};

export const loginActionThunk = (credentials: {
  email: string;
  password: string;
}): AppThunk => dispatch => {
  auth
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(userCredential => {
      dispatch(errorClear());
      dispatch(loadProfile(userCredential.user));
    })
    .catch(error => {
      const { code, message } = error;
      dispatch(errorCreator(message, code));
    });
};

export const loginActionGoogleThunk = (): AppThunk => dispatch => {
  auth
    .signInWithPopup(GoogleProvider)
    .then(result => {
      dispatch(errorClear());
      dispatch(loadProfile(result.user));
    })
    .catch(error => {
      const { code, message } = error;
      dispatch(errorCreator(message, code));
    });
};

export const loginActionFacebookThunk = (): AppThunk => dispatch => {
  auth
    .signInWithPopup(FacebookProvider)
    .then(result => {
      dispatch(errorClear());
      dispatch(loadProfile(result.user));
    })
    .catch(error => {
      const { code, message } = error;
      dispatch(errorCreator(message, code));
    });
};

// Action creators

export const loadProfile = (profile: any): loadProfileAction => {
  return {
    type: LOAD_PROFILE,
    payload: profile,
  };
};

export const logoutAction = (): logoutProfileAction => {
  return {
    type: LOGOUT_PROFILE,
  };
};

export const errorCreator = (msg: string, code: string): createProfileError => {
  return {
    type: SET_ERROR_PROFILE,
    payload: {
      msg,
      code,
    },
  };
};

export const errorClear = (): clearProfileError => {
  return {
    type: CLEAR_ERROR_PROFILE,
  };
};
