import React from "react";
import Heading from "../Heading";
import LoginForm from "../LoginForm";
import Navigation from "../Navigation";

const LoginPage: React.FunctionComponent = () => {
  return (
    <Navigation>
      <Heading>Login</Heading>
      <LoginForm />
    </Navigation>
  );
};

export default LoginPage;
