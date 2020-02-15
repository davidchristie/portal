import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import useAuthentication from "../../hooks/useAuthentication";
import HomePage from "../HomePage";
import LoadingPage from "../LoadingPage";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";

export const HOME_PATH = "/";
export const LOGIN_PATH = "/login";
export const SIGNUP_PATH = "/signup";

const Routes: React.FunctionComponent = () => {
  const { loading, user } = useAuthentication();
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <Switch>
      {user == null ? (
        <>
          <Route component={LoginPage} path={LOGIN_PATH} />
          <Route component={SignupPage} path={SIGNUP_PATH} />
          <Route path="*">
            <Redirect to={SIGNUP_PATH} />
          </Route>
        </>
      ) : (
        <Route component={HomePage} path={HOME_PATH} />
      )}
    </Switch>
  );
};

export default Routes;
