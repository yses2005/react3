import { auth } from "constants/ActionTypes";

const initialState = {
  loginPending: false, // true -> completed / error
  loginError: null, // Wrong credentials / sorry you can't login today

  isLoggedIn: false,
  username: null,
};

/**
 * action.type -
 * action.payload -
 */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case auth.LOGIN_PENDING: {
      return {
        ...state,
        loginPending: true,
        loginError: null,
      };
    }

    case auth.LOGIN_COMPLETED: {
      const { username } = action.payload;
      return {
        ...state,
        loginPending: false,
        isLoggedIn: true,
        username,
      };
    }

    case auth.LOGIN_FAILED: {
      const { errorMessage } = action.payload;
      return {
        ...state,
        loginPending: false,
        loginError: errorMessage,
      };
    }

    case auth.LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        username: null,
      };
    }

    default:
      return state;
  }
}
