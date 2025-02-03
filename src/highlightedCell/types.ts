import { CellId, CellProps, CellValue } from "@/types";

export interface HighlightedCellProps extends CellProps {
  id: CellId;
  rowIndex: number;
  amount: CellValue;
  columnIndex: number;
}
