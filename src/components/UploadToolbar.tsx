import React from "react";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

import LinearProgressWithLabel from "../components/LinearProgressWithLabel";
import { ALLOW_FORMATS } from "../schemas/file";

export interface UploadToolbarProps {
  loading: boolean;
  error: string | null;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const UploadToolbar = ({ error, loading, onChange }: UploadToolbarProps) => (
  <Toolbar>
    {loading ? (
      <Box flexGrow={1}>
        <LinearProgressWithLabel />
      </Box>
    ) : (
      <Box flexGrow={1} color={error && "error.main"}>
        {error ?? "Доступные форматы .jpeg .jpg .pdf"}
      </Box>
    )}
    <Box>
      <label htmlFor="upload-file">
        <input
          onChange={onChange}
          accept={ALLOW_FORMATS.join(",")}
          style={{ display: "none" }}
          id="upload-file"
          type="file"
          hidden
        />
        <Button variant="contained" color="primary" component="span">
          Загрузить
        </Button>
      </label>
    </Box>
  </Toolbar>
);

export default React.memo(UploadToolbar);
