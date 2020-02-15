import classNames from "classnames";
import React from "react";
import "./index.css";

interface Props {
  right?: boolean;
}

const Row: React.FunctionComponent<Props> = ({ children, right }) => {
  return <div className={classNames("Row", { right })}>{children}</div>;
};

export default Row;
