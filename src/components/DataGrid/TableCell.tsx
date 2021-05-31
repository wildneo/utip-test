import React from "react";

import MUITableCell from "@material-ui/core/TableCell";

import { Accessor, TabelCellProps } from "./interfaces";
import { getValue } from "../../hooks/useSortBy";

const TableCell = (props: TabelCellProps<unknown>) => {
  const { index, rowIndex, row, column, ...restProps } = props;
  const { width: defaultWidth = 0, accessor: accessorFn, formatter } = column;
  const [width, setWidth] = React.useState(defaultWidth);

  const ref = React.useRef<HTMLTableCellElement | null>(null);
  const accessor = accessorFn ?? ((column.key as unknown) as Accessor<{}>);
  const value = getValue(row as {}, accessor);

  React.useLayoutEffect(() => {
    if (ref.current && defaultWidth === 0) {
      setWidth(ref.current.clientWidth);
    }
  }, [defaultWidth]);

  return (
    <MUITableCell
      data-rowindex={rowIndex}
      data-cellindex={index}
      align={column.align}
      style={{ width }}
      tabIndex={0}
      ref={ref}
      {...restProps}
    >
      {formatter ? formatter(value, row, column) : value}
    </MUITableCell>
  );
};

export default React.memo(TableCell) as <Row>(
  props: React.PropsWithoutRef<TabelCellProps<Row>>
) => JSX.Element;
