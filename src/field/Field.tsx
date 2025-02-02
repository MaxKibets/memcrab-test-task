import React, { ChangeEvent, FC, memo, useCallback, useEffect, useState } from "react";

import debounce from "@/utils/debounce";

import FieldLayout from "./FieldLayout";
import { FieldProps } from "./types";

const Field: FC<FieldProps> = ({ onChange, delay = 500, max, value, ...props }) => {
  const [currentValue, setCurrentValue] = useState(null);

  useEffect(() => {
    if (currentValue !== value) {
      setCurrentValue(value);
    }
  }, [value]);

  const onChangeDelayed = useCallback(debounce(onChange, delay), []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(0, Math.min(max, Number(event.target.value)));
    onChangeDelayed(newValue - value);
    setCurrentValue(newValue);
  };

  console.log("Field render");
  return (
    <FieldLayout
      value={currentValue < 1 ? "" : String(currentValue)}
      onChange={handleChange}
      max={max}
      {...props}
    />
  );
};

export default memo(Field);
