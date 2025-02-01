// context
export type AddRows = (count: number) => void;
export type RemoveRows = (count: number) => void;
export type AddCols = (count: number) => void;
export type RemoveCols = (count: number) => void;

// field
export type FieldOnChange = (value: number) => void;

// table
export type CellId = string;
export type CellValue = number;
export interface Cell {
  id: CellId;
  amount: CellValue;
}
