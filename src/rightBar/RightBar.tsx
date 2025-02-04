import React, { FC } from "react";

import { useTableContext } from "../tableContext/hooks";
import VirtualGrid from "../virtualGrid/VirtualGrid";
import SumCell from "../sumCell/SumCell";
import DeleteButton from "../deleteButton/DeleteButton";
import { RightBarProps } from "./types";
import { useRowHighlightContext } from "../rowHighlightContext/hooks";

const DeleteRowButton: FC<{ rowIndex: number }> = ({ rowIndex }) => {
  const { removeRow } = useTableContext();
  const { sethighlightedRow } = useRowHighlightContext();

  return (
    <DeleteButton
      onClick={() => {
        removeRow(rowIndex);
        sethighlightedRow(null);
      }}
      title="delete row"
    />
  );
};

const RightBar: FC<RightBarProps> = ({ matrix, ref }) => {
  const totalSum = matrix.map((row) => row.reduce((acc, { amount }) => acc + amount, 0));

  return (
    <VirtualGrid
      ref={ref}
      columnCount={1}
      rowCount={matrix.length}
      style={{ overflowY: "hidden", overflowX: "scroll" }}
      cellRenderer={({ rowIndex, style }) => (
        <SumCell rowIndex={rowIndex} style={style}>
          {totalSum[rowIndex]}
          <DeleteRowButton rowIndex={rowIndex} />
        </SumCell>
      )}
    />
  );
};

export default RightBar;
