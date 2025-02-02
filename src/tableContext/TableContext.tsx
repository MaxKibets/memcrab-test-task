import React, { FC, ReactNode, createContext, useMemo, useState } from "react";

import {
  AddCols,
  AddRows,
  IncreaseAmount,
  RemoveCols,
  RemoveRows,
} from "@/types";
import createCell from "@/utils/createCell";

import { Matrix, TableContextProps } from "./types";

const INITIAL_MATRIX: Matrix = [];

export const TableContext = createContext<TableContextProps>({
  matrix: INITIAL_MATRIX,
});

const TableProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [matrix, setMatrix] = useState(INITIAL_MATRIX);

  const addRows: AddRows = (count) =>
    setMatrix((prevMatrix) => {
      const colsCount = prevMatrix.at(0)?.length || 0;

      return [
        ...prevMatrix,
        ...Array.from({ length: count }, () =>
          Array.from({ length: colsCount }, () => createCell()),
        ),
      ];
    });

  const removeRows: RemoveRows = (count) =>
    setMatrix((prevMatrix) => {
      return prevMatrix.slice(0, count);
    });

  const addCols: AddCols = (count) =>
    setMatrix((prevMatrix) => {
      const newMatrix = prevMatrix.length ? prevMatrix : [[]];

      return newMatrix.map((row) => [
        ...row,
        ...Array.from({ length: count }, () => createCell()),
      ]);
    });

  const removeCols: RemoveCols = (count) =>
    setMatrix((prevMatrix) => {
      return prevMatrix.map((row) => row.slice(0, count));
    });

  const increaseAmount: IncreaseAmount = (rowIndex, cellIndex) => {
    setMatrix((prevMatrix) => {
      const newMatrix = [...prevMatrix];
      newMatrix[rowIndex][cellIndex].amount += 1;

      return newMatrix;
    });
  };

  const contextValue = useMemo(
    () => ({
      matrix,
      addRows,
      removeRows,
      addCols,
      removeCols,
      increaseAmount,
    }),
    [matrix],
  );

  return (
    <TableContext.Provider value={contextValue}>
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
