import { CSSProperties, ReactNode } from "react";

import { CellId } from "@/types";

export interface CellProps {
  children: ReactNode;
  style: CSSProperties;
  border?: "right" | "bottom";
  onClick?: () => void;
  id?: CellId;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isHighlighted?: boolean;
}
