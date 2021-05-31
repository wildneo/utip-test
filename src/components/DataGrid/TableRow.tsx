import React from "react";

import MUITableRow from "@material-ui/core/TableRow";

import { TabelRowProps } from "./interfaces";
import TableCell from "./TableCell";

const TableRow = (props: TabelRowProps<unknown>) => {
  const { index: rowIndex, row, columns, selected, hover } = props;

  return (
    <MUITableRow hover={hover} selected={selected}>
      {columns.map((column, index) => (
        <TableCell
          key={column.key}
          index={index}
          rowIndex={rowIndex}
          column={column}
          row={row}
        />
      ))}
    </MUITableRow>
  );
};

export default React.memo(TableRow);
