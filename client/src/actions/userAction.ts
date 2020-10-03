export const SET_USER_START = 'userAction/SET_USER_REQUEST' as const;
export const SET_USER_SUCCESS = 'userAction/SET_USER_SUCCESS' as const;
export const SET_USER_FAILURE = 'userAction/SET_USER_FAILURE' as const;
export const SIGN_OUT_SUCCESS = 'userAction/SIGN_OUT_SUCCESS' as const;

export const setUserStart = (isLoggingIn: boolean) => ({
  type: SET_USER_START,
  isLoggingIn,
});

export const setUserSuccess = (
  isLoggingIn: boolean,
  userInfo: object,
  token: any
) => ({
  type: SET_USER_SUCCESS,
  isLoggingIn,
  userInfo,
  token,
});

export const setUserFailure = (isLoggingIn: boolean) => ({
  type: SET_USER_FAILURE,
  isLoggingIn,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export type UserAction =
  | ReturnType<typeof setUserStart>
  | ReturnType<typeof setUserSuccess>
  | ReturnType<typeof setUserFailure>;
