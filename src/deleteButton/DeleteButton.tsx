import React, { FC } from "react";

import * as css from "./deleteButton.module.css";

const DeleteButton: FC<{ title: string; onClick: () => void }> = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className={css.button} title={title}>
      X
    </button>
  );
};

export default DeleteButton;
