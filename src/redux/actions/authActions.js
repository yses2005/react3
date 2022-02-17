import { auth } from "constants/ActionTypes";

export function login(username) {
  return async (dispatch) => {
    dispatch({
      type: auth.LOGIN_PENDING,
    });

    const hasError = false;
    setTimeout(() => {
        dispatch({
          type: auth.LOGIN_COMPLETED,
          payload: {
            username,
          },
        });
    }, 0);
  };
}

export function logout() {
  return {
    type: auth.LOGOUT,
  };
}
