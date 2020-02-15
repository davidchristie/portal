import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";

export const LOGIN_PATH = "/login";
export const SIGNUP_PATH = "/signup";

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route component={LoginPage} path={LOGIN_PATH} />
      <Route component={SignupPage} path={SIGNUP_PATH} />
      <Route path="*">
        <Redirect to={SIGNUP_PATH} />
      </Route>
    </Switch>
  );
};

export default Routes;
