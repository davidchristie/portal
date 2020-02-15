import { combineReducers, Reducer } from "redux";
import { ActionType, LOGOUT } from "../actions";
import authentication from "./authentication";

export type RootState = ReturnType<typeof combined>;

const combined = combineReducers({
  authentication
});

const rootReducer: Reducer<RootState, ActionType> = (state, action) => {
  switch (action.type) {
    case LOGOUT:
      return combined(undefined, action);

    default:
      return combined(state, action);
  }
};

export default rootReducer;
