import { createStore as createReduxStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

export const createStore = (): Store => {
  const enhancer = composeWithDevTools();
  return createReduxStore(reducer, enhancer);
};
