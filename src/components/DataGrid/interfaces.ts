import React from "react";

export type FormatterFn<T> = (
  value: string | null,
  row: T,
  column: Column<T>
) => React.ReactNode;
export type AccessorFn<T> = (item: T) => string;
export type Accessor<T> = keyof T | AccessorFn<T>;
export type SortDirection = "asc" | "desc";

export interface Column<Row = unknown> {
  key: string;
  name?: string;
  accessor?: AccessorFn<Row>;
  formatter?: FormatterFn<Row>;
  align?: "right" | "left" | "center";
  width?: number;
}

export type TableRowComponent<Row> = React.ComponentType<TabelRowProps<Row>>;

export interface DataGridProps<Row> {
  rows: Row[];
  columns: Column<Row>[];
  selected?: string[];
  placeholder?: React.ReactNode;
  sortable?: boolean;
  hideHead?: boolean;
  hover?: boolean;
  stickyHeader?: boolean;
  defaultSortBy?: string;
  defaultDirection?: SortDirection;
  getRowId?: (row: Row) => string;
}

export interface TableBodyProps<
  Row,
  RowComponent extends TableRowComponent<Row>
> {
  rows: Row[];
  columns: Column<Row>[];
  placeholder?: React.ReactNode;
  selected?: string[];
  hover?: boolean;
  getRowId?: (row: Row) => string;
  tableRowComponent?: RowComponent;
}

export interface TabelRowProps<Row> {
  row: Row;
  index: number;
  columns: Column<Row>[];
  selected?: boolean;
  hover?: boolean;
}

export interface TabelCellProps<Row> {
  index: number;
  rowIndex: number;
  row: Row;
  column: Column<Row>;
}
