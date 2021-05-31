import React from "react";

import Box from "@material-ui/core/Box";
import MUITableBody from "@material-ui/core/TableBody";
import MUITableCell from "@material-ui/core/TableCell";
import MUITableRow from "@material-ui/core/TableRow";
import { uniqueId } from "lodash";

import { TableBodyProps, TableRowComponent } from "./interfaces";
import BaseTableRow from "./TableRow";

const TableBody = (
  props: TableBodyProps<unknown, TableRowComponent<unknown>>
) => {
  const {
    rows,
    columns,
    placeholder,
    selected,
    hover,
    getRowId = () => uniqueId(),
    tableRowComponent: TableRow = BaseTableRow
  } = props;

  return (
    <MUITableBody>
      {rows.map((row, index) => (
        <TableRow
          key={getRowId(row)}
          row={row}
          index={index}
          hover={hover}
          columns={columns}
          selected={selected && selected.includes(getRowId(row))}
        />
      ))}
      {placeholder && rows.length === 0 && (
        <MUITableRow>
          <MUITableCell colSpan={columns.length}>
            <Box marginX="auto" marginY={2} textAlign="center">
              {placeholder}
            </Box>
          </MUITableCell>
        </MUITableRow>
      )}
    </MUITableBody>
  );
};

export default React.memo(TableBody) as <Row extends {}>(
  props: React.PropsWithoutRef<TableBodyProps<Row, TableRowComponent<Row>>>
) => JSX.Element;
