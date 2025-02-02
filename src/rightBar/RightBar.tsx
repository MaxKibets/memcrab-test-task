import React, { FC, useMemo, useRef } from "react";

import { VirtualGridRef } from "@/types";

import Cell from "../cell/Cell";
import { useTableContext } from "../tableContext/hooks";
import VirtualGrid from "../virtualGrid/VirtualGrid";

const RightBar: FC<{ ref: VirtualGridRef }> = ({ ref }) => {
  const { matrix } = useTableContext();
  const visibleCellsRef = useRef([]);

  const totalSum = useMemo(
    () => matrix.map((row) => row.reduce((acc, { amount }) => acc + amount, 0)),
    [matrix],
  );

  const handleMouseEnter = (rowIndex: number) => {
    const row = matrix[rowIndex];

    visibleCellsRef.current = Array.from(
      document.querySelectorAll(row.map((cell) => `[data-id="${cell.id}"]`).join(",")),
    )
      .filter((elem) => elem !== null)
      .map((elem: HTMLElement, index) => {
        const { amount } = row[index];
        const precent = String(
          Math.floor((amount / Math.max(...row.map(({ amount }) => amount))) * 100),
        );

        elem.dataset.precent = precent;
        elem.style.filter = `saturate(${precent}%)`;

        return elem;
      });
  };

  const handleMouseLeave = () => {
    if (!visibleCellsRef.current) return;
    visibleCellsRef.current.forEach((elem) => {
      delete elem.dataset.precent;
    });
  };

  console.log("RightBar render");
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
        </Cell>
      )}
    />
  );
};

export default RightBar;
