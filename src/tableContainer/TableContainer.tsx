import React, { FC, useRef } from "react";
import { GridOnScrollProps } from "react-window";

import { useTableContext } from "../tableContext/hooks";
import RightBar from "../rightBar/RightBar";
import BottomBar from "../bottomBar/BottomBar";
import Table from "../table/Table";
import TableContainerLayout from "./TableContainerLayout";

const TableContainer: FC = () => {
  const { matrix } = useTableContext();
  const stickyRowRef = useRef(null);
  const stickyColRef = useRef(null);

  const onScroll = ({
    scrollTop,
    scrollLeft,
    scrollUpdateWasRequested,
  }: GridOnScrollProps) => {
    if (!scrollUpdateWasRequested) {
      stickyColRef.current.scrollTo({ scrollLeft: 0, scrollTop });
      stickyRowRef.current.scrollTo({ scrollLeft, scrollTop: 0 });
    }
  };

  if (!matrix.length || !matrix.at(0)?.length) return null;

  return (
    <TableContainerLayout
      rightBar={<RightBar matrix={matrix} ref={stickyColRef} />}
      bottomBar={<BottomBar matrix={matrix} ref={stickyRowRef} />}
      table={<Table matrix={matrix} onScroll={onScroll} />}
    />
  );
};

export default TableContainer;
