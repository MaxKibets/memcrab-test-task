import React, { FC, memo } from "react";

import Cell from "../cell/Cell";
import { useRowHighlightContext } from "../rowHighlightContext/hooks";
import { SumCellProps } from "./types";

const SumCell: FC<SumCellProps> = ({ rowIndex, children, ...props }) => {
  const { sethighlightedRow } = useRowHighlightContext();

  return (
    <Cell
      onMouseEnter={() => sethighlightedRow(rowIndex)}
      onMouseLeave={() => sethighlightedRow(null)}
      border="bottom"
      {...props}
    >
      {children}
    </Cell>
  );
};

export default memo(SumCell);
