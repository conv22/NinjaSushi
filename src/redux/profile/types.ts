export const LOAD_PROFILE = 'LOAD_PROFILE';
export const LOGOUT_PROFILE = 'LOGOUT_PROFILE';
export const SET_ERROR_PROFILE = 'SET_ERROR_PROFILE';
export const CLEAR_ERROR_PROFILE = 'CLEAR_ERROR_PROFILE';

export type InitialStateType = {
  profile: any;
  error: Error | null;
  loggedIn: boolean;
};

export type Profile = {
  email: string;
};

export type Error = {
  msg: string;
  code: string;
};

export type loadProfileAction = {
  type: typeof LOAD_PROFILE;
  payload: any;
};

export type logoutProfileAction = {
  type: typeof LOGOUT_PROFILE;
};

export type createProfileError = {
  type: typeof SET_ERROR_PROFILE;
  payload: Error;
};

export type clearProfileError = {
  type: typeof CLEAR_ERROR_PROFILE;
};

export type ProfileActionTypes =
  | loadProfileAction
  | logoutProfileAction
  | createProfileError
  | clearProfileError;
