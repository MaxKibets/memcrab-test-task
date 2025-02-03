// context

import { CSSProperties, ReactNode, RefObject } from "react";
import { FixedSizeGrid } from "react-window";

export type ModifyByCount = (count: number) => void;
export type RemoveByIndex = (index: number) => void;
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

export interface CellProps {
  children: ReactNode;
  style: CSSProperties;
  border?: "right" | "bottom";
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  highlighted?: boolean;
}

export type Matrix = Cell[][];
