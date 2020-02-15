import { RootState } from "../reducer";

export const authenticationSelector = (state: RootState) =>
  state.authentication;
