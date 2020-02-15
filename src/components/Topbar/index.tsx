import React from "react";
import useAuthentication from "../../hooks/useAuthentication";
import useLogout from "../../hooks/useLogout";
import Button from "../Button";
import NavItem from "../NavItem";
import { LOGIN_PATH, SIGNUP_PATH, HOME_PATH } from "../Routes";
import "./index.css";

const Topbar: React.FunctionComponent = () => {
  const { user } = useAuthentication();
  const logout = useLogout();
  return (
    <header className="Topbar">
      <div className="Topbar-title">Portal</div>
      <div className="Topbar-menu">
        {user ? (
          <>
            <NavItem to={HOME_PATH}>Home</NavItem>
            <Button onClick={logout}>Logout</Button>
          </>
        ) : (
          <>
            <NavItem to={SIGNUP_PATH}>Signup</NavItem>
            <NavItem to={LOGIN_PATH}>Login</NavItem>
          </>
        )}
      </div>
    </header>
  );
};

export default Topbar;
