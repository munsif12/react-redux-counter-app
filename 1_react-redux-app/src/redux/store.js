//creating a store whle will take 1 parameters and that parameter is roootReducer and rootredicer has all the application state indide it
import { createStore } from "redux";
import { rootReducer } from "./reducer/rootReducer";

const Store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default Store;
