import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserQuery } from "../../graphql/user";
import {
  getUserError,
  getUserRequest,
  getUserSuccess
} from "../../redux/actions";
import { authenticationSelector } from "../../redux/selectors/authentication";
import { clearAccessToken, getAccessToken } from "../../storage";

const useAuthentication = () => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector(authenticationSelector);
  const getUser = async () => {
    if (user == null && getAccessToken()) {
      dispatch(getUserRequest());
      try {
        const userData = await getUserQuery();
        dispatch(getUserSuccess(userData.user));
      } catch (error) {
        clearAccessToken();
        dispatch(getUserError(error));
      }
    }
  };
  React.useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return {
    loading,
    user
  };
};

export default useAuthentication;
