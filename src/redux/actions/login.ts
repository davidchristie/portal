import { ActionType } from ".";

export interface LoginErrorAction {
  payload: Error;
  type: typeof LOGIN_ERROR;
}

export interface LoginRequestAction {
  payload: {
    email: string;
    password: string;
  };
  type: typeof LOGIN_REQUEST;
}

export interface LoginSuccessAction {
  payload: {
    email: string;
  };
  type: typeof LOGIN_SUCCESS;
}

export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const loginError = (error: Error): ActionType => ({
  payload: error,
  type: LOGIN_ERROR
});

export const loginRequest = (email: string, password: string): ActionType => ({
  payload: {
    email,
    password
  },
  type: LOGIN_REQUEST
});

export const loginSuccess = (email: string): ActionType => ({
  payload: {
    email
  },
  type: LOGIN_SUCCESS
});
