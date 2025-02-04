import React, { FC } from "react";

import VirtualGrid from "../virtualGrid/VirtualGrid";
import HighlightedCell from "../highlightedCell/HighlightedCell";
import { TableProps } from "./types";

const Table: FC<TableProps> = ({ onScroll, matrix }) => (
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

export default Table;
