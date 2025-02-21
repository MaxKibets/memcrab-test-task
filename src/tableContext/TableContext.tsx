import React, { FC, ReactNode, createContext, useState } from "react";

import { ModifyByCount, RemoveByIndex, IncreaseAmount, Matrix } from "@/types";
import createCell from "@/utils/createCell";

import { TableContextProps } from "./types";

const INITIAL_MATRIX: Matrix = [];

export const TableContext = createContext<TableContextProps>({
  matrix: INITIAL_MATRIX,
});

const TableProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [matrix, setMatrix] = useState(INITIAL_MATRIX);
  const [nearestCount, setNearestCount] = useState(0);

  const addRows: ModifyByCount = (count) =>
    setMatrix((prevMatrix) => {
      const colsCount = prevMatrix.at(0)?.length || 0;

      return [
        ...prevMatrix,
        ...Array.from({ length: count }, () =>
          Array.from({ length: colsCount }, () => createCell()),
        ),
      ];
    });

  const removeRows: ModifyByCount = (count) =>
    setMatrix((prevMatrix) => prevMatrix.slice(0, count));

  const removeRow: RemoveByIndex = (index) => {
    setMatrix((prevMatrix) => prevMatrix.filter((_, rowIndex) => rowIndex !== index));
  };

  const addCols: ModifyByCount = (count) =>
    setMatrix((prevMatrix) => {
      const newMatrix = prevMatrix.length ? prevMatrix : [[]];

      return newMatrix.map((row) => [
        ...row,
        ...Array.from({ length: count }, () => createCell()),
      ]);
    });

  const removeCol: RemoveByIndex = (index) =>
    setMatrix((prevMatrix) =>
      prevMatrix.map((row) => row.filter((_, colIndex) => colIndex !== index)),
    );

  const removeCols: ModifyByCount = (count) =>
    setMatrix((prevMatrix) => {
      return prevMatrix.map((row) => row.slice(0, count));
    });

  const increaseAmount: IncreaseAmount = (rowIndex, cellIndex) =>
    setMatrix((prevMatrix) => {
      const newMatrix = [...prevMatrix];
      newMatrix[rowIndex][cellIndex].amount += 1;

      return newMatrix;
    });

  return (
    <TableContext.Provider
      value={{
        matrix,
        addRows,
        removeRow,
        removeRows,
        addCols,
        removeCol,
        removeCols,
        increaseAmount,
        setNearestCount,
        nearestCount,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
