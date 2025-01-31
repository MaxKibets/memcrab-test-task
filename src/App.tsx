import React from "react";
import { createRoot } from "react-dom/client";

import "@/public/global.css";

import TableProvider from "./TableContext";
import Field from "./field/Field";

const root = createRoot(document.getElementById("app"));

root.render(
  <TableProvider>
    <Field
      label="rows (m)"
      id="rows"
      onChange={(value) => console.log(value)}
    />
    <Field
      label="cols (n)"
      id="cols"
      onChange={(value) => console.log(value)}
    />
    <Field
      label="closest (x)"
      id="closest"
      onChange={(value) => console.log(value)}
      delay={0}
    />
  </TableProvider>,
);
