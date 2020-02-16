import React from "react";
import Heading from "../Heading";
import LoginForm from "../LoginForm";
import Navigation from "../Navigation";
import SideImage from "../SideImage";

const LoginPage: React.FunctionComponent = () => {
  return (
    <Navigation>
      <SideImage>
        <Heading>Login</Heading>
        <LoginForm />
      </SideImage>
    </Navigation>
  );
};

export default LoginPage;
