import React, { FC, useMemo } from "react";

import { VirtualGridRef } from "@/types";

import Cell from "../cell/Cell";
import { useTableContext } from "../tableContext/hooks";
import VirtualGrid from "../virtualGrid/VirtualGrid";

const RightBar: FC<{ ref: VirtualGridRef }> = ({ ref }) => {
  const { matrix } = useTableContext();

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
        <Cell style={style} border="bottom">
          {totalSum[rowIndex]}
        </Cell>
      )}
    />
  );
};

export default RightBar;
