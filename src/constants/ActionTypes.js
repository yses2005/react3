import keyMirror from "keymirror";

export const auth = keyMirror({
  LOGIN_PENDING: null,
  LOGIN_COMPLETED: null,
  LOGIN_FAILED: null,

  LOGOUT: null,
});


export const dog = keyMirror({
  FETCH_DOG_PENDING:null,
  FETCH_DOG_COMPLETED:null,
  FETCH_DOG_FAILED:null,
});

