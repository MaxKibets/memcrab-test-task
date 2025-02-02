import { CSSProperties, ReactNode } from "react";

export interface CellProps {
  children: ReactNode;
  style: CSSProperties;
  border?: "right" | "bottom";
  onClick?: () => void;
}
