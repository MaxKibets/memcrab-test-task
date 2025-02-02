import React from "react";
import { createRoot } from "react-dom/client";

import "@/public/global.css";

import TableProvider from "./tableContext/TableContext";
import TableContainer from "./tableContainer/TableContainer";
import Controls from "./controls/Controls";

const root = createRoot(document.getElementById("app"));

root.render(
  <TableProvider>
    <Controls />
    <TableContainer />
  </TableProvider>,
);
