import React from "react";
import "./index.css";

const SideImage: React.FunctionComponent = ({ children }) => {
  return (
    <div className="SideImage">
      <div className="SideImage-left" />
      <div className="SideImage-right">{children}</div>
    </div>
  );
};

export default SideImage;
