import React, { FC, useMemo } from "react";

import Cell from "../cell/Cell";
import { HighlightedCellProps } from "./types";
import { useRowHighlightContext } from "../rowHighlightContext/hooks";
import { useTableContext } from "../tableContext/hooks";
import { useNearestHighlightContext } from "../nearestHighlightContext/hooks";

const HighlightedCell: FC<HighlightedCellProps> = ({
  id,
  children,
  rowIndex,
  columnIndex,
  amount,
  style,
  ...props
}) => {
  const { matrix, increaseAmount, nearestCount } = useTableContext();
  const { highlightedRow } = useRowHighlightContext();
  const { nearests, calculateNearest, setNearests } = useNearestHighlightContext();

  const percent = useMemo(() => {
    if (highlightedRow !== rowIndex) return 0;

    return Math.floor(
      (amount / Math.max(...matrix[rowIndex].map(({ amount }) => amount))) * 100,
    );
  }, [highlightedRow]);

  return (
    <Cell
      onClick={() => increaseAmount(rowIndex, columnIndex)}
      onMouseEnter={() =>
        calculateNearest({
          matrix,
          hoveredCell: matrix[rowIndex][columnIndex],
          nearestCount,
        })
      }
      onMouseLeave={() => setNearests(null)}
      highlighted={highlightedRow === rowIndex || nearests?.has(id)}
      style={{ ...style, filter: `saturate(${percent}%)` }}
      {...props}
    >
      {percent || children}
    </Cell>
  );
};

export default HighlightedCell;
