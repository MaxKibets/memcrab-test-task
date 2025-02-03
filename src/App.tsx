import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/public/global.css";

import TableProvider from "./tableContext/TableContext";
import TableContainer from "./tableContainer/TableContainer";
import Controls from "./controls/Controls";
import { RowHighlightProvider } from "./rowHighlightContext/RowHighlightContext";
import { NearestHighlightProvider } from "./nearestHighlightContext/NearestHighlightContext";

const root = createRoot(document.getElementById("app"));

root.render(
  <StrictMode>
    <TableProvider>
      <Controls />
      <RowHighlightProvider>
        <NearestHighlightProvider>
          <TableContainer />
        </NearestHighlightProvider>
      </RowHighlightProvider>
    </TableProvider>
  </StrictMode>,
);
