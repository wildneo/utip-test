import React from "react";

import {
  Accessor,
  AccessorFn,
  Column,
  SortDirection
} from "../components/DataGrid/interfaces";

export const getAccessor = <T>(
  columns: Column<T>[],
  key: string | null
): Accessor<T> | null => {
  if (!key) return null;

  const column = columns.find((col) => col.key === key);

  if (!column) return null;
  if (column.accessor) return column.accessor;

  return key as keyof T;
};

export const getValue = <T>(row: T | null, accessor: Accessor<T> | null) => {
  if (!row || !accessor) return null;

  if (typeof accessor === "function") {
    const accessorFn = accessor as AccessorFn<T>;
    const value = accessorFn(row) ?? null;

    return value !== null ? value.toString() : value;
  }

  const value = ((row[accessor] as unknown) as string | undefined) ?? null;

  return value !== null ? value.toString() : value;
};

export const applySorting = <T>(
  rows: T[],
  accessor: Accessor<T> | null,
  direction: SortDirection | null = null
) => {
  if (!accessor || !direction) {
    return rows;
  }

  const comparator = new Intl.Collator("co", { numeric: true }).compare;

  return rows.slice().sort((a, b) => {
    const aValue = getValue(a, accessor);
    const bValue = getValue(b, accessor);

    if (!aValue && !bValue) {
      return 0;
    }
    if (!aValue) {
      return direction === "asc" ? 1 : -1;
    }
    if (!bValue) {
      return direction === "asc" ? -1 : 1;
    }

    return direction === "asc"
      ? comparator(aValue, bValue)
      : comparator(bValue, aValue);
  });
};

export const cycleDirection = (
  direction: SortDirection | null
): SortDirection | null => {
  if (!direction) return "asc";
  if (direction === "asc") return "desc";
  return null;
};

export default <Row>(
  rows: Row[],
  columns: Column<Row>[],
  defaultSortBy: string | null = null,
  defaultDirection: SortDirection | null = null
) => {
  const [sortBy, setSortBy] = React.useState(defaultSortBy);
  const [direction, setDirection] = React.useState(defaultDirection);

  const accessor = React.useMemo(() => getAccessor(columns, sortBy), [
    columns,
    sortBy
  ]);

  const sortedRows = React.useMemo(
    () => applySorting(rows, accessor, direction),
    [rows, accessor, direction]
  );

  const updateSorting = (newSortBy: string | null) => {
    const newDirection =
      !newSortBy || sortBy === newSortBy
        ? cycleDirection(direction)
        : cycleDirection(null);

    setSortBy(newSortBy);
    setDirection(newDirection);
  };

  const resetSorting = () => {
    setSortBy(null);
    setDirection(null);
  };

  return {
    sortedRows,
    sortBy,
    direction,
    updateSorting,
    resetSorting
  };
};
