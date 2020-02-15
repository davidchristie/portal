import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
import { clearAccessToken } from "../../storage";

const useLogout = () => {
  const dispatch = useDispatch();
  return () => {
    clearAccessToken();
    dispatch(logout());
  };
};

export default useLogout;
