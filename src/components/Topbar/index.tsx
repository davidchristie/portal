import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { userSelector } from "../../redux/selectors/user";
import Button from "../Button";
import { LOGIN_PATH, SIGNUP_PATH } from "../Routes";
import "./index.css";

const Topbar: React.FunctionComponent = () => {
  const user = useSelector(userSelector);
  return (
    <header className="Topbar">
      {user ? (
        <>
          <Button>Logout</Button>
        </>
      ) : (
        <>
          <NavLink to={SIGNUP_PATH}>Signup</NavLink>
          <NavLink to={LOGIN_PATH}>Login</NavLink>
        </>
      )}
    </header>
  );
};

export default Topbar;
