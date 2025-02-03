import { useContext } from "react";

import { RowHighlightContext } from "./RowHighlightContext";

export const useRowHighlightContext = () => {
  const context = useContext(RowHighlightContext);
  if (!context) {
    throw new Error("useRowHighlightContext must be used within a RowHighlightProvider");
  }
  return context;
};
