import React from "react";
import "./index.css";

const ListItem: React.FunctionComponent = ({ children }) => {
  return <li className="ListItem">{children}</li>;
};

export default ListItem;
