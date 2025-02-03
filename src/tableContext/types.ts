import { Matrix, IncreaseAmount, ModifyByCount, RemoveByIndex } from "@/types";

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
