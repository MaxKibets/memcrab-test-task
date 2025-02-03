import { useContext } from "react";

import { NearestHighlightContext } from "./NearestHighlightContext";

export const useNearestHighlightContext = () => {
  const context = useContext(NearestHighlightContext);
  if (!context) {
    throw new Error(
      "useNearestHighlightContext must be used within a RowHighlightProvider",
    );
  }
  return context;
};
