import React, { FC } from "react";
import AutoSizer, { Size } from "react-virtualized-auto-sizer";
import { FixedSizeGrid as Grid } from "react-window";

import { COL_WIDTH, ROW_HEIGHT } from "@/constants";

import { VirtualGridProps } from "./types";

const VirtualGrid: FC<VirtualGridProps> = ({
  ref,
  onScroll,
  columnCount,
  rowCount,
  style,
  cellRenderer,
}) => {
  return (
    <AutoSizer>
      {({ height, width }: Size) => (
        <Grid
          ref={ref}
          onScroll={onScroll}
          height={height}
          width={width}
          columnCount={columnCount}
          rowCount={rowCount}
          rowHeight={ROW_HEIGHT}
          columnWidth={COL_WIDTH}
          style={style}
        >
          {cellRenderer}
        </Grid>
      )}
    </AutoSizer>
  );
};

export default VirtualGrid;
