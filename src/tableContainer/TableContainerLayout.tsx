import React, { FC } from "react";

import { TableContainerLayoutProps } from "./types";
import * as css from "./tableContainer.module.css";

const TableContainerLayout: FC<TableContainerLayoutProps> = ({
  rightBar,
  bottomBar,
  table,
}) => (
  <div className={css.wrap}>
    <div className={css.rightBar}>{rightBar}</div>
    <div className={css.bottomBar}>{bottomBar}</div>
    <div className={css.table}>{table}</div>
  </div>
);

export default TableContainerLayout;
