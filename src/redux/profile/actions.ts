import { AppThunk } from '../store';
import {
  LOAD_PROFILE,
  LOGOUT_PROFILE,
  SET_ERROR_PROFILE,
  CLEAR_ERROR_PROFILE,
  loadProfileAction,
  logoutProfileAction,
  createProfileError,
  clearProfileError,
} from './types';
import { showPopUpAction } from '../reducers/PopUpReducer';
import { auth, GoogleProvider, FacebookProvider } from '../../firebase';

export const registerActionThunk = (credentials: {
  email: string;
  password: string;
}): AppThunk => dispatch => {
  auth
    .createUserWithEmailAndPassword(credentials.email, credentials.password)
    .then(userCredentials => {
      dispatch(errorClear());
      dispatch(showPopUpAction('success', 'Успешно'));
      dispatch(loadProfile(userCredentials.user));
    })
    .catch(error => {
      const { code, message } = error;
      dispatch(showPopUpAction('error', message));
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
      dispatch(showPopUpAction('success', 'Успешно'));
      dispatch(loadProfile(userCredential.user));
    })
    .catch(error => {
      const { code, message } = error;
      dispatch(showPopUpAction('error', message));
      dispatch(errorCreator(message, code));
    });
};

export const loginActionGoogleThunk = (): AppThunk => dispatch => {
  auth
    .signInWithPopup(GoogleProvider)
    .then(result => {
      dispatch(errorClear());
      dispatch(showPopUpAction('success', 'Успешно'));
      dispatch(loadProfile(result.user));
    })
    .catch(error => {
      const { code, message } = error;
      dispatch(showPopUpAction('error', message));
      dispatch(errorCreator(message, code));
    });
};

export const loginActionFacebookThunk = (): AppThunk => dispatch => {
  auth
    .signInWithPopup(FacebookProvider)
    .then(result => {
      dispatch(errorClear());
      dispatch(showPopUpAction('success', 'Успешно'));
      dispatch(loadProfile(result.user));
    })
    .catch(error => {
      const { code, message } = error;
      dispatch(showPopUpAction('error', message));
      dispatch(errorCreator(message, code));
    });
};

export const logoutActionThunk = (): AppThunk => dispatch => {
  auth
    .signOut()
    .then(() => {
      dispatch(showPopUpAction('success', 'Успешно'));
      dispatch(logoutAction());
    })
    .catch(error => {
      const { msg, code } = error;
      dispatch(showPopUpAction('error', msg));
      dispatch(errorCreator(msg, code));
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
