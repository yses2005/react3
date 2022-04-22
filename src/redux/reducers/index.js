import { combineReducers } from "redux";

import auth from "redux/reducers/authReducer";
import dog from "redux/reducers/dogReducer";

const rootReducer = combineReducers({
  auth,dog
});

export default rootReducer;
