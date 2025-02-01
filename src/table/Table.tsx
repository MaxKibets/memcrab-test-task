import React, { FC } from "react";

import { useTableContext } from "../tableContext/hooks";

const Table: FC = () => {
  const { matrix } = useTableContext();

  console.log("Table render");

  return (
    <table>
      <tbody>
        <tr>
          <td>{matrix.toString()}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
