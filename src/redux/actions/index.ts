import {
  LoginErrorAction,
  LoginRequestAction,
  LoginSuccessAction
} from "./login";
import {
  SignupErrorAction,
  SignupRequestAction,
  SignupSuccessAction
} from "./signup";
import {
  GetUserErrorAction,
  GetUserRequestAction,
  GetUserSuccessAction
} from "./user";

export * from "./login";
export * from "./signup";
export * from "./user";

export type ActionType =
  | GetUserErrorAction
  | GetUserRequestAction
  | GetUserSuccessAction
  | LoginErrorAction
  | LoginRequestAction
  | LoginSuccessAction
  | SignupErrorAction
  | SignupRequestAction
  | SignupSuccessAction;
