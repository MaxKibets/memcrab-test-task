import React from "react";
import { createRoot } from "react-dom/client";

import TableProvider from "./TableContext";
import Field from "./Field";

const root = createRoot(document.getElementById("app"));

root.render(
  <TableProvider>
    <Field label="test" />
  </TableProvider>,
);
