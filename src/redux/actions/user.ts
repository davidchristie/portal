import { ActionType } from ".";

export interface GetUserErrorAction {
  payload: Error;
  type: typeof GET_USER_ERROR;
}

export interface GetUserRequestAction {
  type: typeof GET_USER_REQUEST;
}

export interface GetUserSuccessAction {
  payload: {
    email: string;
  } | null;
  type: typeof GET_USER_SUCCESS;
}

export const GET_USER_ERROR = "GET_USER_ERROR";
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";

export const getUserError = (error: Error): ActionType => ({
  payload: error,
  type: GET_USER_ERROR
});

export const getUserRequest = (): ActionType => ({
  type: GET_USER_REQUEST
});

export const getUserSuccess = (user: { email: string } | null): ActionType => ({
  payload: user,
  type: GET_USER_SUCCESS
});
