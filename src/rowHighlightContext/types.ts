export type HighlightedRow = number | null;

export interface RowHighlightContextProps {
  highlightedRow: HighlightedRow;
  setHighlightedRow: (row: HighlightedRow) => void;
}