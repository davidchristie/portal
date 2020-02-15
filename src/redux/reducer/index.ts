import { combineReducers } from "redux";
import authentication from "./authentication";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  authentication
});

export default rootReducer;
