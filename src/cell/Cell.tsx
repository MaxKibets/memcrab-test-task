import React, { FC } from "react";

import { CellProps } from "./types";
import * as css from "./cell.module.css";

const Cell: FC<CellProps> = ({ style, children, border, onClick }) => {
  // TODO should think about memoization...
  console.log("Cell render");
  return (
    <div onClick={onClick} style={style} className={`${css.cell} ${css[border] || ""}`}>
      {children}
    </div>
  );
};

export default Cell;
