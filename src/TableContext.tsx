import React, { FC, createContext } from "react";

import { TableContextProps, WithChildren } from "@/types";

const TableContext = createContext<TableContextProps>({ matrix: [] });

const TableProvider: FC<WithChildren> = ({ children }) => {
  return (
    <TableContext.Provider value={{ matrix: [] }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
