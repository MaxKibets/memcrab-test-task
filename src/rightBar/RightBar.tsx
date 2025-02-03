import React, { FC, useMemo } from "react";

import { VirtualGridRef } from "@/types";

import { useTableContext } from "../tableContext/hooks";
import VirtualGrid from "../virtualGrid/VirtualGrid";
import SumCell from "../sumCell/SumCell";
import DeleteButton from "../deleteButton/DeleteButton";

const RightBar: FC<{ ref: VirtualGridRef }> = ({ ref }) => {
  const { matrix, removeRow } = useTableContext();

  const totalSum = useMemo(
    () => matrix.map((row) => row.reduce((acc, { amount }) => acc + amount, 0)),
    [matrix],
  );

  return (
    <VirtualGrid
      ref={ref}
      columnCount={1}
      rowCount={matrix.length}
      style={{ overflowY: "hidden", overflowX: "scroll" }}
      cellRenderer={({ rowIndex, style }) => (
        <SumCell rowIndex={rowIndex} style={style}>
          {totalSum[rowIndex]}
          <DeleteButton onClick={() => removeRow(rowIndex)} title="delete row" />
        </SumCell>
      )}
    />
  );
};

export default RightBar;
