import React, { FC } from "react";

import { VirtualGridRef } from "@/types";

import Cell from "../cell/Cell";
import { useTableContext } from "../tableContext/hooks";
import VirtualGrid from "../virtualGrid/VirtualGrid";
import DeleteButton from "../deleteButton/DeleteButton";

const BottomBar: FC<{ ref: VirtualGridRef }> = ({ ref }) => {
  const { matrix, removeCol } = useTableContext();

  const percentile = matrix.at(0).map(
    (_, colIndex) =>
      matrix.reduce((acc, row) => {
        return acc + row[colIndex].amount;
      }, 0) / 2,
  );

  console.log("BottomBar render");
  return (
    <VirtualGrid
      ref={ref}
      columnCount={matrix.at(0).length}
      rowCount={1}
      style={{ overflowY: "scroll", overflowX: "hidden" }}
      cellRenderer={({ columnIndex, style }) => (
        <Cell style={style} border="right">
          {percentile[columnIndex]}
          <DeleteButton onClick={() => removeCol(columnIndex)} title="delete column" />
        </Cell>
      )}
    />
  );
};

export default BottomBar;
