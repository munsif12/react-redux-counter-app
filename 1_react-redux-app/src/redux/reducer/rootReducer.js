import { reducerForIncAndDec } from "./inc-and-dec-reducers";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  reducerForIncAndDec /**anynumber of reducers here square reducer */,
});
export { rootReducer };
