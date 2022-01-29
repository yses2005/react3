import { auth } from "constants/ActionTypes";

export function login() {
  return async (dispatch) => {
    dispatch({
      type: auth.LOGIN_PENDING,
    });

    const hasError = false;
    setTimeout(() => {
      if (hasError) {
        dispatch({
          type: auth.LOGIN_FAILED,
          payload: {
            errorMessage: "Something went wrong, please try again later.",
          },
        });
      } else {
        dispatch({
          type: auth.LOGIN_COMPLETED,
        });
      }
    }, 3000);
  };
}

export function logout() {
  return {
    type: auth.LOGOUT,
  };
}
