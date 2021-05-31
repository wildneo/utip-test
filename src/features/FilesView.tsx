import React from "react";

import { observer } from "mobx-react-lite";

import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import FileList from "../components/FileList";

import FileStore, { IFile } from "../store/FilesStore";

const FileView = () => {
  const fileStore = React.useContext(FileStore);
  const { files, removeFile, clearFiles } = fileStore;

  const handleRemove = React.useCallback(
    (file: IFile) => {
      removeFile(file);
    },
    [removeFile]
  );
  const handleClear = () => {
    clearFiles();
  };

  return (
    <Paper style={{ width: "100%" }}>
      <Toolbar style={{ justifyContent: "flex-end" }}>
        <Button onClick={handleClear} variant="outlined">
          Очистить
        </Button>
      </Toolbar>
      <Divider />
      <FileList onRemove={handleRemove} files={files} />
    </Paper>
  );
};

export default observer(FileView);
