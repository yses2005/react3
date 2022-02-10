import keyMirror from "keymirror";

export const auth = keyMirror({
  LOGIN_PENDING: null,
  LOGIN_COMPLETED: null,
  LOGIN_FAILED: null,

  LOGOUT: null,
});

export const dog = keyMirror({
  FETCH_DOGS_PENDING: null,
  FETCH_DOGS_COMPLETED: null,
  FETCH_DOGS_FAILED: null,
})
