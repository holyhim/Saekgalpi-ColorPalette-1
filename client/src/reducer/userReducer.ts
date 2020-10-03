import {
  UserAction,
  SET_USER_START,
  SET_USER_SUCCESS,
  SET_USER_FAILURE,
  //SIGN_OUT_SUCCESS,
} from '../actions/userAction';

export type UserState = {
  isLoggingIn: boolean;
  userInfo: object;
  token: any;
};

const inititalState: UserState = {
  isLoggingIn: false,
  userInfo: {},
  token: null,
};

function userReducer(state: UserState = inititalState, action: UserAction) {
  switch (action.type) {
    case SET_USER_START: {
      return {
        ...state,
        isLoggingIn: action.isLoggingIn,
      };
    }
    case SET_USER_SUCCESS: {
      return {
        ...state,
        isLoggingIn: action.isLoggingIn,
        userInfo: action.userInfo,
        token: action.token,
      };
    }
    case SET_USER_FAILURE: {
      return {
        ...state,
        isLoggingIn: action.isLoggingIn,
      };
    }
    // case SIGN_OUT_SUCCESS: {
    //   return {
    //     ...state,
    //     userInfo: {},
    //     token: null,
    //   };
    // }
    default: {
      return state;
    }
  }
}

export default userReducer;
