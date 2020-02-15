import { AnyAction } from "redux";
import {
  LoginErrorAction,
  LoginRequestAction,
  LoginSuccessAction
} from "./login";

export * from "./login";

export type ActionType =
  | AnyAction
  | LoginErrorAction
  | LoginRequestAction
  | LoginSuccessAction;
