import { Cell, Matrix } from "@/types";

import React, { createContext, FC, ReactNode, useState } from "react";

export const NearestHighlightContext = createContext(null);

export const NearestHighlightProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [nearests, setNearests] = useState(null);

  const calculateNearest = ({
    matrix,
    hoveredCell,
    nearestCount,
  }: {
    matrix: Matrix;
    hoveredCell: Cell;
    nearestCount: number;
  }) => {
    if (!hoveredCell) return new Set();

    setNearests(
      new Set(
        matrix
          .flat()
          .map((cell) => ({
            ...cell,
            difference: Math.abs(cell.amount - hoveredCell.amount),
          }))
          .filter((cell) => cell.id !== hoveredCell.id)
          .sort((a, b) => a.difference - b.difference)
          .slice(0, nearestCount)
          .map((cell) => cell.id),
      ),
    );
  };

  return (
    <NearestHighlightContext.Provider value={{ nearests, calculateNearest, setNearests }}>
      {children}
    </NearestHighlightContext.Provider>
  );
};
