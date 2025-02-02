import React, { FC } from "react";
import { GridOnScrollProps } from "react-window";

import { useTableContext } from "../tableContext/hooks";
import Cell from "../cell/Cell";
import VirtualGrid from "../virtualGrid/VirtualGrid";

const Table: FC<{ onScroll: (props: GridOnScrollProps) => void }> = ({ onScroll }) => {
  const { matrix, increaseAmount } = useTableContext();

  return (
    <VirtualGrid
      onScroll={onScroll}
      columnCount={matrix.at(0).length}
      rowCount={matrix.length}
      cellRenderer={({ columnIndex, rowIndex, style }) => {
        const { amount, id } = matrix[rowIndex][columnIndex];

        return (
          <Cell
            onClick={() => increaseAmount(rowIndex, columnIndex)}
            style={style}
            id={id}
          >
            {amount}
          </Cell>
        );
      }}
    />
  );
};

export default Table;
