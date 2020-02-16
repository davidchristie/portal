import React from "react";
import Heading from "../Heading";
import Navigation from "../Navigation";
import SideImage from "../SideImage";
import SignupForm from "../SignupForm";

const SignupPage: React.FunctionComponent = () => {
  return (
    <Navigation>
      <SideImage>
        <Heading>Signup</Heading>
        <SignupForm />
      </SideImage>
    </Navigation>
  );
};

export default SignupPage;
