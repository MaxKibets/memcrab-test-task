import { Cell, CellId, Matrix } from "@/types";

export type Nearests = Set<CellId> | null;

export type CalculateNearest = (props: {
  matrix: Matrix;
  hoveredCell: Cell;
  nearestCount: number;
}) => void;

export interface NearestHighlightContextProps {
  nearests: Nearests;
  calculateNearest: CalculateNearest;
  setNearests: (value: Nearests) => void;
}
