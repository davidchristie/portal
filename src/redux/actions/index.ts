import {
  LoginErrorAction,
  LoginRequestAction,
  LoginSuccessAction
} from "./login";
import { LogoutAction } from "./logout";
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
export * from "./logout";
export * from "./signup";
export * from "./user";

export type ActionType =
  | GetUserErrorAction
  | GetUserRequestAction
  | GetUserSuccessAction
  | LoginErrorAction
  | LoginRequestAction
  | LoginSuccessAction
  | LogoutAction
  | SignupErrorAction
  | SignupRequestAction
  | SignupSuccessAction;
