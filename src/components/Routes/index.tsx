import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import useAuthentication from "../../hooks/useAuthentication";
import EditNotePage from "../EditNotePage";
import HomePage from "../HomePage";
import LoadingPage from "../LoadingPage";
import LoginPage from "../LoginPage";
import NotesPage from "../NotesPage";
import SignupPage from "../SignupPage";

export const HOME_PATH = "/";
export const LOGIN_PATH = "/login";
export const NOTES_PATH = "/notes";
export const SIGNUP_PATH = "/signup";

export const getEditNotePath = (id: string) => {
  return `/notes/${id}`;
};

const Routes: React.FunctionComponent = () => {
  const { loading, user } = useAuthentication();
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <Switch>
      {user == null ? (
        <>
          <Route component={LoginPage} exact path={LOGIN_PATH} />
          <Route component={SignupPage} path={SIGNUP_PATH} />
          <Route path="*">
            <Redirect to={SIGNUP_PATH} />
          </Route>
        </>
      ) : (
        <>
          <Route component={HomePage} exact path={HOME_PATH} />
          <Route component={NotesPage} exact path={NOTES_PATH} />
          <Route component={EditNotePage} exact path="/notes/:id" />
          <Route path="*">
            <Redirect to={HOME_PATH} />
          </Route>
        </>
      )}
    </Switch>
  );
};

export default Routes;
