import { Matrix } from "@/types";
import { GridOnScrollProps } from "react-window";

export interface TableProps {
  matrix: Matrix;
  onScroll: (props: GridOnScrollProps) => void;
}
