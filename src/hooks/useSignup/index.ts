import React from "react";
import { useDispatch } from "react-redux";
import { signupMutation } from "../../graphql/signup";
import { signupError, signupRequest, signupSuccess } from "../../redux/actions";

const useSignup = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const signup = async (email: string, password: string) => {
    dispatch(signupRequest(email, password));
    setLoading(true);
    try {
      await signupMutation(email, password);
      dispatch(signupSuccess());
    } catch (error) {
      dispatch(signupError(error));
    }
    setLoading(false);
  };
  return {
    loading,
    signup
  };
};

export default useSignup;
