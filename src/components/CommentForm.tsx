import React from "react";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";

import { IComment } from "../store/CommentsStore";
import COUNTRIES from "../countries";
import Yup from "../schemas/yup";

export interface FormProps {
  scheme: Yup.AnyObjectSchema;
  onCommit: (data: IComment) => void;
}

const CommentForm = (props: FormProps) => {
  const { scheme, onCommit } = props;
  const { handleSubmit, control, formState } = useForm<IComment>({
    resolver: yupResolver(scheme),
    defaultValues: {
      email: "",
      comment: "",
      country: ""
    }
  });
  const handleCommit = (data: IComment) => {
    onCommit(data);
  };

  return (
    <Paper style={{ width: "100%" }}>
      <DialogContent>
        <form
          onSubmit={handleSubmit(handleCommit)}
          autoComplete="off"
          noValidate
        >
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                fullWidth
                label="E-mail"
                variant="outlined"
                placeholder="Введите e-mail"
                error={Boolean(error?.message)}
                helperText={error?.message ?? " "}
                InputLabelProps={{ shrink: true }}
                {...field}
              />
            )}
          />
          <Controller
            name="country"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                select
                fullWidth
                label="Страна"
                variant="outlined"
                margin="normal"
                error={Boolean(error?.message)}
                helperText={error?.message ?? " "}
                InputLabelProps={{ shrink: true }}
                SelectProps={{
                  displayEmpty: true,
                  MenuProps: { keepMounted: true }
                }}
                {...field}
              >
                <MenuItem value="" disabled>
                  <i>Не выбрана</i>
                </MenuItem>
                {Object.keys(COUNTRIES).map((key) => (
                  <MenuItem key={key} value={key}>
                    {COUNTRIES[key]}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
          <Controller
            name="comment"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                fullWidth
                multiline
                rows={5}
                rowsMax={10}
                label="Комментарий"
                variant="outlined"
                margin="normal"
                placeholder="Введите комментарий"
                error={Boolean(error?.message)}
                helperText={error?.message ?? " "}
                InputLabelProps={{ shrink: true }}
                {...field}
              />
            )}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleSubmit(handleCommit)}
          disabled={!formState.isDirty}
          variant="outlined"
          color="secondary"
        >
          Отправить
        </Button>
      </DialogActions>
    </Paper>
  );
};

export default React.memo(CommentForm);
