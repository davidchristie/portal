import React from "react";
import Topbar from "../Topbar";
import "./index.css";

const Navigation: React.FunctionComponent = ({ children }) => {
  return (
    <div className="Navigation">
      <Topbar />
      {children}
    </div>
  );
};

export default Navigation;
