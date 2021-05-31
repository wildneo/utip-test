import React from "react";

import { head } from "lodash";
import { observer } from "mobx-react-lite";
import { useSnackbar } from "notistack";

import Paper from "@material-ui/core/Paper";

import UploadToolbar from "../components/UploadToolbar";
import fileSchema from "../schemas/file";
import yup from "../schemas/yup";
import sleep from "../utils/sleep";

import FileStore from "../store/FilesStore";

const FileUpload = () => {
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const { addFile } = React.useContext(FileStore);
  const { enqueueSnackbar } = useSnackbar();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    setError(null);
    const file = head(event.target.files);
    try {
      setLoading(true);
      const validFile: File = await fileSchema.validate(file);
      await sleep(1000);
      addFile({
        id: Date.now(),
        name: validFile.name,
        size: validFile.size,
        type: validFile.type === "application/pdf" ? "pdf" : "jpg"
      });
      enqueueSnackbar("Файл успешно загружен", { variant: "success" });
    } catch (e) {
      const yupError = e as yup.ValidationError;
      setError(head(yupError.errors) as string);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Paper style={{ width: "100%" }}>
      <UploadToolbar onChange={handleChange} loading={loading} error={error} />
    </Paper>
  );
};

export default observer(FileUpload);
