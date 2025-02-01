import { ChangeEvent } from "react";

import { FieldOnChange } from "@/types";

export interface FieldProps {
  onChange: FieldOnChange;
  delay?: number;
  value: number;
  max: number;
  id: string;
  label: string;
}

export interface FieldLayoutProps
  extends Omit<FieldProps, "onChange" | "delay" | "value"> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
