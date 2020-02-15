import { Reducer } from "redux";
import {
  ActionType,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  LOGIN_SUCCESS,
  GET_USER_REQUEST,
  LOGIN_REQUEST
} from "../actions";

export interface AuthenticationState {
  loading: boolean;
  user: {
    email: string;
  } | null;
}

const initialState: AuthenticationState = {
  loading: false,
  user: null
};

const userReducer: Reducer<AuthenticationState, ActionType> = (
  state = initialState,
  action
): AuthenticationState => {
  switch (action.type) {
    case GET_USER_ERROR:
      return {
        loading: false,
        user: null
      };

    case GET_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload
      };

    case LOGIN_SUCCESS:
      return {
        loading: false,
        user: {
          email: action.payload.email
        }
      };

    case GET_USER_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

export default userReducer;
