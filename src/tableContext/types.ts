import { Cell, IncreaseAmount, ModifyByCount, RemoveByIndex } from "@/types";

export type Matrix = Cell[][];

export interface TableContextProps {
  matrix: Matrix;
  addRows?: ModifyByCount;
  removeRow?: RemoveByIndex;
  removeRows?: ModifyByCount;
  addCols?: ModifyByCount;
  removeCol?: RemoveByIndex;
  removeCols?: ModifyByCount;
  increaseAmount?: IncreaseAmount;
  setNearestCount?: (value: number) => void;
  nearestCount?: number;
}
