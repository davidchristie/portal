import React from "react";
import Navigation from "../Navigation";
import LoginForm from "../LoginForm";

const LoginPage: React.FunctionComponent = () => {
  return (
    <Navigation>
      <h1>Login</h1>
      <LoginForm />
    </Navigation>
  );
};

export default LoginPage;
