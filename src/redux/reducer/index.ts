import { combineReducers, Reducer } from "redux";
import { ActionType, LOGOUT } from "../actions";
import authentication from "./authentication";
import notes from "./notes";

export type RootState = ReturnType<typeof combined>;

const combined = combineReducers({
  authentication,
  notes
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
