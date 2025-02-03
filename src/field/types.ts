import { ChangeEvent } from "react";

import { FieldOnChange } from "@/types";

export type OnChange = (event: ChangeEvent<HTMLInputElement>) => void;

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
  onChange: OnChange;
  value: string;
}
