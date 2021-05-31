import React from "react";

import { isEmpty } from "lodash";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import Toolbar from "@material-ui/core/Toolbar";

import FileListItem from "./FileListItem";
import { IFile } from "../../store/FilesStore";

export interface FileListProps {
  files: IFile[];
  onRemove: (file: IFile) => void;
}
const FileList = (props: FileListProps) => {
  const { files, onRemove } = props;

  return isEmpty(files) ? (
    <Toolbar>
      <Box marginX="auto" marginY={4} textAlign="center">
        Список файлов пуст
      </Box>
    </Toolbar>
  ) : (
    <List>
      {files.map((file) => (
        <FileListItem onRemove={onRemove} key={file.id} file={file} />
      ))}
    </List>
  );
};

export default FileList;
