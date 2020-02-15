import React from "react";

interface Props {
  onSubmit: () => void;
}

const Form: React.FunctionComponent<Props> = ({ children, onSubmit }) => {
  return (
    <form
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
