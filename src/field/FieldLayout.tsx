import React, { FC } from "react";

import { FieldLayoutProps } from "./types";
import * as css from "./field.module.css";

const FieldLayout: FC<FieldLayoutProps> = ({
  max,
  id,
  label,
  value,
  onChange,
}) => (
  <div className={css.wrap} data-max={max}>
    <label htmlFor={id} className={css.label}>
      {label}
    </label>
    <input
      id={id}
      value={value}
      onChange={onChange}
      type="number"
      placeholder="0"
      className={css.input}
    />
  </div>
);

export default FieldLayout;
