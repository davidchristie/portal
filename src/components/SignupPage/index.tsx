import React from "react";
import Heading from "../Heading";
import Navigation from "../Navigation";
import SignupForm from "../SignupForm";

const SignupPage: React.FunctionComponent = () => {
  return (
    <Navigation>
      <Heading>Signup</Heading>
      <SignupForm />
    </Navigation>
  );
};

export default SignupPage;
