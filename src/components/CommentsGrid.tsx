import React from "react";

import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import useSearchFilter from "../hooks/useSearchFilter";
import SearchInput from "../components/SearchInput";
import Toolbar from "@material-ui/core/Toolbar";

import DataGrid, { Column } from "../components/DataGrid";
import { IComment } from "../store/CommentsStore";
import COUNTRIES from "../countries";

export interface CommentsGridProps {
  comments: IComment[];
}
const COLUMNS: Column<IComment>[] = [
  {
    key: "email",
    name: "E-mail",
    width: 200
  },
  {
    key: "comment",
    name: "Комментарий"
  },
  {
    key: "country",
    name: "Страна",
    formatter: (value) => (value ? `${COUNTRIES[value]}(${value})` : null),
    width: 200
  }
];

const CommentsGrid = ({ comments }: CommentsGridProps) => {
  const { filteredCollection, inputProps } = useSearchFilter(comments, [
    "email",
    "comment",
    "country"
  ]);

  return (
    <Paper style={{ width: "100%" }}>
      <Toolbar>
        <SearchInput
          {...inputProps}
          placeholder="Начните печатать"
          clearTitle="Очистить"
        />
      </Toolbar>
      <Divider />
      <div style={{ width: "100%", overflowX: "auto" }}>
        <DataGrid
          columns={COLUMNS}
          rows={filteredCollection}
          placeholder="Список комментариев пуст"
          sortable
          hover
        />
      </div>
    </Paper>
  );
};

export default CommentsGrid;
