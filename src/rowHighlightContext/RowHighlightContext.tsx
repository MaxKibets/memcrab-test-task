import React, { createContext, FC, ReactNode, useState } from "react";

export const RowHighlightContext = createContext(null);

export const RowHighlightProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [highlightedRow, sethighlightedRow] = useState(null);

  return (
    <RowHighlightContext.Provider value={{ highlightedRow, sethighlightedRow }}>
      {children}
    </RowHighlightContext.Provider>
  );
};
