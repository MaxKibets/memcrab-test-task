import React, { FC } from "react";
import clsx from "clsx";

import { CellProps } from "@/types";

import * as css from "./cell.module.css";

const Cell: FC<CellProps> = ({
  style,
  children,
  border,
  onClick,
  onMouseEnter,
  onMouseLeave,
  highlighted,
}) => (
  <div
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={style}
    className={clsx(css.cell, css[border], { [css.highlighted]: highlighted })}
  >
    {children}
  </div>
);

export default Cell;
