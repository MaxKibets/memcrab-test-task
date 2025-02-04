import React, { FC } from "react";
import { GridOnScrollProps } from "react-window";

import { useTableContext } from "../tableContext/hooks";
import VirtualGrid from "../virtualGrid/VirtualGrid";
import HighlightedCell from "../highlightedCell/HighlightedCell";

const Table: FC<{ onScroll: (props: GridOnScrollProps) => void }> = ({ onScroll }) => {
  const { matrix } = useTableContext();

  return (
    <VirtualGrid
      onScroll={onScroll}
      columnCount={matrix.at(0).length}
      rowCount={matrix.length}
      cellRenderer={({ columnIndex, rowIndex, style }) => {
        const { amount, id } = matrix[rowIndex][columnIndex];

        return (
          <HighlightedCell
            id={id}
            rowIndex={rowIndex}
            columnIndex={columnIndex}
            amount={amount}
            style={style}
          >
            {amount}
          </HighlightedCell>
        );
      }}
    />
  );
};

export default Table;
