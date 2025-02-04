import React, { FC, memo } from "react";

import Cell from "../cell/Cell";
import { useRowHighlightContext } from "../rowHighlightContext/hooks";
import { SumCellProps } from "./types";

const SumCell: FC<SumCellProps> = ({ rowIndex, children, ...props }) => {
  const { setHighlightedRow } = useRowHighlightContext();

  return (
    <Cell
      onMouseEnter={() => setHighlightedRow(rowIndex)}
      onMouseLeave={() => setHighlightedRow(null)}
      border="bottom"
      {...props}
    >
      {children}
    </Cell>
  );
};

export default memo(SumCell);
