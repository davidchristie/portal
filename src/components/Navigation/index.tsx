import React from "react";
import Topbar from "../Topbar";

const Navigation: React.FunctionComponent = ({ children }) => {
  return (
    <div className="Navigation">
      <Topbar />
      {children}
    </div>
  );
};

export default Navigation;
