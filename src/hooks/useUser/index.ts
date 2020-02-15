import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors/user";

const useUser = () => {
  return useSelector(userSelector);
};

export default useUser;
