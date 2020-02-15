import React from "react";
import Navigation from "../Navigation";
import SignupForm from "../SignupForm";

const SignupPage: React.FunctionComponent = () => {
  return (
    <Navigation>
      <h1>Signup</h1>
      <SignupForm />
    </Navigation>
  );
};

export default SignupPage;
