import {
  AddCols,
  AddRows,
  Cell,
  IncreaseAmount,
  RemoveCols,
  RemoveRows,
} from "@/types";

export type Matrix = Cell[][];

export interface TableContextProps {
  matrix: Matrix;
  addRows?: AddRows;
  removeRows?: RemoveRows;
  addCols?: AddCols;
  removeCols?: RemoveCols;
  increaseAmount?: IncreaseAmount;
}
