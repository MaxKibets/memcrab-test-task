import React, { FC, ReactNode } from "react";

import * as css from "./controls.module.css";

const ControlsLayout: FC<{
  children: ReactNode;
}> = ({ children }) => <div className={css.controls}>{children}</div>;

export default ControlsLayout;
