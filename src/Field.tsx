import React, { FC } from "react";

interface FieldProps {
  label: string;
}

const Field: FC<FieldProps> = ({ label }) => {
  return (
    <div>
      <label htmlFor="input">{label}</label>
      <input id="input" type="text" />
    </div>
  );
};

export default Field;
