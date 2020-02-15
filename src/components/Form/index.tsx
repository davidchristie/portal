import React from "react";
import "./index.css";

interface Props {
  onSubmit: () => void;
}

const Form: React.FunctionComponent<Props> = ({ children, onSubmit }) => {
  return (
    <form
      className="Form"
      onSubmit={event => {
        event.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
