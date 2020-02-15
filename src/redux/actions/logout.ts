import { ActionType } from ".";

export interface LogoutAction {
  type: typeof LOGOUT;
}

export const LOGOUT = "LOGOUT";

export const logout = (): ActionType => ({
  type: LOGOUT
});
