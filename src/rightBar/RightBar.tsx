import React, { FC, useMemo, useRef, useCallback } from "react";
import { VirtualGridRef } from "@/types";
import Cell from "../cell/Cell";
import { useTableContext } from "../tableContext/hooks";
import VirtualGrid from "../virtualGrid/VirtualGrid";
import DeleteButton from "../deleteButton/DeleteButton";

const RightBar: FC<{ ref: VirtualGridRef }> = ({ ref }) => {
  const { matrix, removeRow } = useTableContext();
  const visibleCellsRef = useRef<HTMLElement[]>([]);

  const totalSum = useMemo(
    () => matrix.map((row) => row.reduce((acc, { amount }) => acc + amount, 0)),
    [matrix],
  );

  const handleMouseEnter = useCallback(
    (rowIndex: number) => {
      const row = matrix[rowIndex];
      const maxAmount = Math.max(...row.map(({ amount }) => amount));

      visibleCellsRef.current = [];

      row.forEach((cell) => {
        const elem = document.querySelector(
          `[data-id="${cell.id}"]`,
        ) as HTMLElement | null;
        if (elem) {
          const percent = Math.floor((cell.amount / maxAmount) * 100);
          elem.dataset.percent = percent.toString();
          elem.style.filter = `saturate(${percent}%)`;
          visibleCellsRef.current.push(elem);
        }
      });
    },
    [matrix],
  );

  const handleMouseLeave = useCallback(() => {
    visibleCellsRef.current.forEach((elem) => {
      delete elem.dataset.percent;
      elem.style.filter = "none";
    });
    visibleCellsRef.current = [];
  }, []);

  return (
    <VirtualGrid
      ref={ref}
      columnCount={1}
      rowCount={matrix.length}
      style={{ overflowY: "hidden", overflowX: "scroll" }}
      cellRenderer={({ rowIndex, style }) => (
        <Cell
          onMouseEnter={() => handleMouseEnter(rowIndex)}
          onMouseLeave={handleMouseLeave}
          style={style}
          border="bottom"
        >
          {totalSum[rowIndex]}
          <DeleteButton onClick={() => removeRow(rowIndex)} title="delete row" />
        </Cell>
      )}
    />
  );
};

export default RightBar;
