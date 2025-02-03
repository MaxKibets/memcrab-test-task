import React, { FC, useRef } from "react";
import { GridOnScrollProps } from "react-window";

import { useTableContext } from "../tableContext/hooks";
import Cell from "../cell/Cell";
import VirtualGrid from "../virtualGrid/VirtualGrid";
import { CellId, CellValue } from "@/types";

const Table: FC<{ onScroll: (props: GridOnScrollProps) => void }> = ({ onScroll }) => {
  const { matrix, increaseAmount, nearestCount } = useTableContext();
  const highlightedCellsRef = useRef(null);

  const handleMouseEnter = (id: CellId, amount: CellValue) => {
    highlightedCellsRef.current = new Set(
      matrix
        .flat()
        .map((cell) => ({
          ...cell,
          difference: Math.abs(cell.amount - amount),
        }))
        .filter((cell) => cell.id !== id)
        .sort((a, b) => a.difference - b.difference)
        .slice(0, nearestCount)
        .map((cell) => cell.id),
    );
  };

  const handleMouseLeave = () => {
    highlightedCellsRef.current = null;
  };

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
            onMouseEnter={() => handleMouseEnter(id, amount)}
            onMouseLeave={handleMouseLeave}
            style={style}
            id={id}
            isHighlighted={highlightedCellsRef.current?.has(id)}
          >
            {amount}
          </Cell>
        );
      }}
    />
  );
};

export default Table;
