import React from "react";

import MUITableCell from "@material-ui/core/TableCell";
import MUITableHead from "@material-ui/core/TableHead";
import MUITableRow from "@material-ui/core/TableRow";
import MUITableSortLabel from "@material-ui/core/TableSortLabel";

import { BaseColumn, SortDirection } from "./interfaces";

interface TableHeadProps<Row> {
  columns: BaseColumn<Row>[];
  showActions?: boolean;
  sortable?: boolean;
  sortBy?: string | null;
  sortDirection?: SortDirection;
  onSortLableClick?: (key: string) => void;
}

const TableHead = (props: TableHeadProps<unknown>) => {
  const { columns, sortBy, sortable, sortDirection, onSortLableClick } = props;

  const handleClick = (key: string) => () => {
    if (onSortLableClick) onSortLableClick(key);
  };

  return (
    <MUITableHead>
      <MUITableRow>
        {columns.map((column) => (
          <MUITableCell
            key={column.key}
            align={column.align}
            sortDirection={sortDirection ?? false}
            style={{ width: column.width }}
          >
            {sortable ? (
              <MUITableSortLabel
                onClick={handleClick(column.key)}
                active={column.key === sortBy && Boolean(sortDirection)}
                direction={column.key === sortBy ? sortDirection : "asc"}
              >
                <b>{column.name ?? column.key}</b>
              </MUITableSortLabel>
            ) : (
              <b>{column.name ?? column.key}</b>
            )}
          </MUITableCell>
        ))}
      </MUITableRow>
    </MUITableHead>
  );
};

export default React.memo(TableHead) as <Row extends {}>(
  props: React.PropsWithoutRef<TableHeadProps<Row>>
) => JSX.Element;
