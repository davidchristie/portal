import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

interface Props {
  to: string;
}

const NavItem: React.FunctionComponent<Props> = ({ children, to }) => {
  return (
    <nav className="NavItem">
      <NavLink to={to}>{children}</NavLink>
    </nav>
  );
};

export default NavItem;
