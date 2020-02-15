import { ActionType } from ".";

export interface SignupErrorAction {
  payload: Error;
  type: typeof SIGNUP_ERROR;
}

export interface SignupRequestAction {
  payload: {
    email: string;
    password: string;
  };
  type: typeof SIGNUP_REQUEST;
}

export interface SignupSuccessAction {
  type: typeof SIGNUP_SUCCESS;
}

export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

export const signupError = (error: Error): ActionType => ({
  payload: error,
  type: SIGNUP_ERROR
});

export const signupRequest = (email: string, password: string): ActionType => ({
  payload: {
    email,
    password
  },
  type: SIGNUP_REQUEST
});

export const signupSuccess = (): ActionType => ({
  type: SIGNUP_SUCCESS
});
