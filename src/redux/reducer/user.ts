import { Reducer } from "redux";
import { ActionType, LOGIN_SUCCESS } from "../actions";

export type UserState = {
  email: string;
} | null;

const initialState: UserState = null;

const userReducer: Reducer<UserState, ActionType> = (
  state = initialState,
  action
): UserState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        email: action.payload.email
      };

    default:
      return state;
  }
};

export default userReducer;
