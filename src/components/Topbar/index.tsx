import React from "react";
import { NavLink } from "react-router-dom";
import userUser from "../../hooks/useAuthentication";
import Button from "../Button";
import { LOGIN_PATH, SIGNUP_PATH, HOME_PATH } from "../Routes";
import "./index.css";

const Topbar: React.FunctionComponent = () => {
  const { user } = userUser();
  return (
    <header className="Topbar">
      {user ? (
        <>
          <NavLink to={HOME_PATH}>Home</NavLink>
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
