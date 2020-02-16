import classNames from "classnames";
import React from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";

const Link: React.FunctionComponent<LinkProps> = ({
  className,
  ...otherProps
}) => {
  return (
    <RouterLink className={classNames("Link", className)} {...otherProps} />
  );
};

export default Link;
