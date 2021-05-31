import React from "react";

import Table from "@material-ui/core/Table";

import { DataGridProps } from "./interfaces";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import useSortBy from "../../hooks/useSortBy";

export type { Column } from "./interfaces";

const DataGrid = <Row extends {}>(props: DataGridProps<Row>) => {
  const {
    rows,
    columns,
    sortable,
    placeholder,
    stickyHeader,
    defaultSortBy,
    defaultDirection,
    hideHead = false,
    selected,
    hover,
    getRowId
  } = props;
  const showHead = !hideHead;
  const { sortedRows, sortBy, direction, updateSorting } = useSortBy(
    rows,
    columns,
    defaultSortBy,
    defaultDirection
  );

  return (
    <Table stickyHeader={stickyHeader}>
      {showHead && (
        <TableHead
          onSortLableClick={updateSorting}
          columns={columns}
          sortDirection={direction ?? undefined}
          sortable={sortable}
          sortBy={sortBy}
        />
      )}
      <TableBody
        getRowId={getRowId}
        rows={sortedRows}
        columns={columns}
        placeholder={placeholder}
        selected={selected}
        hover={hover}
      />
    </Table>
  );
};

export default React.memo(DataGrid) as <Row>(
  props: React.PropsWithoutRef<DataGridProps<Row>>
) => JSX.Element;
