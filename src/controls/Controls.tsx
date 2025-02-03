import React, { FC, useCallback } from "react";

import { FieldOnChange } from "@/types";

import { useTableContext } from "../tableContext/hooks";
import Field from "../field/Field";

import ControlsLayout from "./ControlsLayout";

const Controls: FC = () => {
  const { matrix, addRows, removeRows, addCols, removeCols, setNearestCount } =
    useTableContext();

  const handleRowsChange: FieldOnChange = useCallback((value) => {
    if (value < 0) {
      removeRows(value);
    } else {
      addRows(value);
    }
  }, []);

  const handleColsChange: FieldOnChange = useCallback((value) => {
    if (value < 0) {
      removeCols(value);
    } else {
      addCols(value);
    }
  }, []);

  const handleNerestChange: FieldOnChange = useCallback(setNearestCount, []);

  return (
    <ControlsLayout>
      <Field
        id="rows"
        label="rows (m)"
        value={matrix.length}
        onChange={handleRowsChange}
        max={100}
      />
      <Field
        id="cols"
        label="cols (n)"
        value={matrix.at(0)?.length || 0}
        onChange={handleColsChange}
        max={100}
      />
      <Field
        label="closest (x)"
        id="closest"
        onChange={handleNerestChange}
        delay={0}
        value={0}
        max={Math.max(0, matrix.length * (matrix.at(0)?.length || 0) - 1)}
      />
    </ControlsLayout>
  );
};

export default Controls;
