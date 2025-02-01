import React from "react";
import { createRoot } from "react-dom/client";

import "@/public/global.css";

import TableProvider from "./tableContext/TableContext";
import Table from "./table/Table";
import Controls from "./controls/Controls";

const root = createRoot(document.getElementById("app"));

root.render(
  <TableProvider>
    <Controls />
    <Table />
  </TableProvider>,
);
