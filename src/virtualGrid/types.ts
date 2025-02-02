import { CSSProperties, ReactNode } from "react";
import { GridChildComponentProps, GridOnScrollProps } from "react-window";

import { VirtualGridRef } from "@/types";

export interface VirtualGridProps {
  ref?: VirtualGridRef;
  onScroll?: (props: GridOnScrollProps) => void;
  columnCount: number;
  rowCount: number;
  style?: CSSProperties;
  cellRenderer: (props: GridChildComponentProps) => ReactNode;
}
