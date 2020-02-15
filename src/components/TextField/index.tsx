import React from "react";
import "./index.css";

interface Props {
  id: string;
  label: string;
  name: string;
  onChange: (value: string) => void;
  type?: string;
  value: string;
}

const TextField: React.FunctionComponent<Props> = ({
  id,
  label,
  name,
  onChange,
  type,
  value
}) => {
  return (
    <div className="TextField">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        onChange={event => onChange(event.target.value)}
        type={type}
        value={value}
      />
    </div>
  );
};

export default TextField;
