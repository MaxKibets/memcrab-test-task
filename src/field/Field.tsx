import React, { FC } from "react";

import * as css from "./field.module.css";

interface FieldProps {
  label: string;
}

const Field: FC<FieldProps> = ({ label }) => {
  return (
    <div className={css.wrap}>
      <label htmlFor="input" className={css.label}>
        {label}
      </label>
      <input id="input" type="text" />
    </div>
  );
};

export default Field;
