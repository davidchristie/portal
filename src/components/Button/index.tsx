import React from "react";
import "./index.css";

interface Props {
  disabled?: boolean;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

const Button: React.FunctionComponent<Props> = ({
  children,
  disabled,
  onClick,
  type
}) => {
  return (
    <button
      className="Button"
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
