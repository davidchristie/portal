import React from "react";
import "./index.css";

interface Props {
  id: string;
  label: string;
  onChange: (value: string) => void;
  type?: string;
  value: string;
}

const TextField: React.FunctionComponent<Props> = ({
  id,
  label,
  onChange,
  type,
  value
}) => {
  return (
    <div className="TextField">
      <label htmlFor={id}>{label}</label>
      <input
        autoComplete={id}
        id={id}
        name={id}
        onChange={event => onChange(event.target.value)}
        type={type}
        value={value}
      />
    </div>
  );
};

export default TextField;
