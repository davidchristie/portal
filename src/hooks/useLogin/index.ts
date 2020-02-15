import React from "react";
import { useDispatch } from "react-redux";
import { loginMutation } from "../../graphql/login";
import { loginError, loginRequest, loginSuccess } from "../../redux/actions";
import { setAccessToken } from "../../storage";

const useLogin = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const login = async (email: string, password: string) => {
    dispatch(loginRequest(email, password));
    setLoading(true);
    try {
      const data = await loginMutation(email, password);
      setAccessToken(data.login.accessToken);
      dispatch(loginSuccess(email));
    } catch (error) {
      dispatch(loginError(error));
    }
    setLoading(false);
  };
  return {
    loading,
    login
  };
};

export default useLogin;
