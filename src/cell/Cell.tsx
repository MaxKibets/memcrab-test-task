import React, { FC } from "react";

import { CellProps } from "./types";
import * as css from "./cell.module.css";

const Cell: FC<CellProps> = ({
  style,
  children,
  border,
  onClick,
  onMouseEnter,
  onMouseLeave,
  id,
}) => (
  <div
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={style}
    className={`${css.cell} ${css[border] || ""}`}
    data-id={id}
  >
    {children}
  </div>
);

export default Cell;
