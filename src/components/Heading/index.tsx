import React from "react";
import "./index.css";

const Heading: React.FunctionComponent = ({ children }) => {
  return <h1 className="Heading">{children}</h1>;
};

export default Heading;
