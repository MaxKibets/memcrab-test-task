import React, { FC } from "react";

import debounce from "@/utils/debounce";

import * as css from "./field.module.css";

interface FieldProps {
  label: string;
  id: string;
  onChange: (value: string) => void;
  delay?: number;
}

const Field: FC<FieldProps> = ({ label, id, onChange, delay = 500 }) => {
  const handleChange = debounce(onChange, delay);

  return (
    <div className={css.wrap}>
      <label htmlFor={id} className={css.label}>
        {label}
      </label>
      <input
        id={id}
        type="number"
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
};

export default Field;
