import React from "react";
import { createRoot } from "react-dom/client";

import "@/public/global.css";

import TableProvider from "./TableContext";
import Field from "./field/Field";

const root = createRoot(document.getElementById("app"));

root.render(
  <TableProvider>
    <Field label="m" />
    <Field label="n" />
    <Field label="x" />
  </TableProvider>,
);
