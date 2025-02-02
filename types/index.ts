// context

import { RefObject } from "react";
import { FixedSizeGrid } from "react-window";

// TODO reorganize types, the same...
export type AddRows = (count: number) => void;
export type RemoveRows = (count: number) => void;
export type AddCols = (count: number) => void;
export type RemoveCols = (count: number) => void;
export type IncreaseAmount = (rowIndex: number, cellIndex: number) => void;

// field
export type FieldOnChange = (value: number) => void;

// table
export type CellId = string;
export type CellValue = number;

export interface Cell {
  id: CellId;
  amount: CellValue;
}

export type VirtualGridRef = RefObject<FixedSizeGrid>;
