import { auth } from "constants/ActionTypes";

export function login(username) {
  return async (dispatch) => {
    dispatch({
      type: auth.LOGIN_PENDING,
    });

    setTimeout(() => {
        dispatch({
          type: auth.LOGIN_COMPLETED,
          payload:
          {
            username,
          }
        });
    }, 3000);
  };
}

export function logout() {
  return {
    type: auth.LOGOUT,
  };
}
