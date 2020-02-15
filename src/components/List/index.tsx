import React from "react";
import "./index.css";

const List: React.FunctionComponent = ({ children }) => {
  return <ul className="List">{children}</ul>;
};

export default List;
