import React, { FC, useRef } from "react";
import { GridOnScrollProps } from "react-window";

import { CellId, CellValue } from "@/types";

import { useTableContext } from "../tableContext/hooks";
import Cell from "../cell/Cell";
import VirtualGrid from "../virtualGrid/VirtualGrid";

const Table: FC<{ onScroll: (props: GridOnScrollProps) => void }> = ({ onScroll }) => {
  const { matrix, increaseAmount, nearestCount } = useTableContext();
  const highlightedCellsRef = useRef([]);

  const handleMouseEnter = ({
    currentId,
    currentAmount,
  }: {
    currentId: CellId;
    currentAmount: CellValue;
  }) => {
    if (!nearestCount) return;

    const highlightedCells = matrix
      .flat()
      .map((cell) => ({
        ...cell,
        difference: Math.abs(cell.amount - currentAmount),
      }))
      .filter((cell) => cell.id !== currentId)
      .sort((a, b) => a.difference - b.difference)
      .slice(0, nearestCount)
      .map(({ id }) => document.querySelector(`[data-id="${id}"]`) as HTMLElement);

    highlightedCells.forEach((elem) => {
      if (elem) elem.dataset.nearest = "true";
    });

    highlightedCellsRef.current = highlightedCells;
  };

  const handleMouseLeave = () => {
    if (!highlightedCellsRef.current || !nearestCount) return;

    highlightedCellsRef.current.forEach((elem) => {
      if (elem) delete elem.dataset.nearest;
    });

    highlightedCellsRef.current = [];
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
            onMouseEnter={() =>
              handleMouseEnter({
                currentAmount: amount,
                currentId: id,
              })
            }
            onMouseLeave={handleMouseLeave}
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
