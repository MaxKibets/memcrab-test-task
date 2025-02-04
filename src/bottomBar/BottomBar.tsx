import React, { FC } from "react";

import Cell from "../cell/Cell";
import { useTableContext } from "../tableContext/hooks";
import VirtualGrid from "../virtualGrid/VirtualGrid";
import DeleteButton from "../deleteButton/DeleteButton";
import { BottomBarProps } from "./types";

const DeleteColButton: FC<{ columnIndex: number }> = ({ columnIndex }) => {
  const { removeCol } = useTableContext();

  return <DeleteButton onClick={() => removeCol(columnIndex)} title="delete column" />;
};

const BottomBar: FC<BottomBarProps> = ({ matrix, ref }) => {
  const percentile = matrix.at(0).map(
    (_, colIndex) =>
      matrix.reduce((acc, row) => {
        return acc + row[colIndex].amount;
      }, 0) / 2,
  );

  return (
    <VirtualGrid
      ref={ref}
      columnCount={matrix.at(0).length}
      rowCount={1}
      style={{ overflowY: "scroll", overflowX: "hidden" }}
      cellRenderer={({ columnIndex, style }) => (
        <Cell style={style} border="right">
          {percentile[columnIndex]}
          <DeleteColButton columnIndex={columnIndex} />
        </Cell>
      )}
    />
  );
};

export default BottomBar;
