import React, { createContext, FC, ReactNode, useState } from "react";

import { HighlightedRow, RowHighlightContextProps } from "./types";

export const RowHighlightContext = createContext<RowHighlightContextProps>(null);

export const RowHighlightProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [highlightedRow, setHighlightedRow] = useState<HighlightedRow>(null);

  return (
    <RowHighlightContext.Provider value={{ highlightedRow, setHighlightedRow }}>
      {children}
    </RowHighlightContext.Provider>
  );
};
