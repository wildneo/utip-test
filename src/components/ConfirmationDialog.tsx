import React from "react";

import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import CustomDialog from "./CustomDialog";

interface ConfirmationDialogProps {
  open: boolean;
  commitText: string;
  cancelText: string;
  onCancel?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onCommit?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ConfirmationDialog = (
  props: React.PropsWithChildren<ConfirmationDialogProps>
) => {
  const { open, commitText, cancelText, children, onCancel, onCommit } = props;

  return (
    <CustomDialog onClose={onCancel} maxWidth="xs" open={open}>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onCancel} autoFocus>
          {cancelText}
        </Button>
        <Button onClick={onCommit} variant="outlined" color="secondary">
          {commitText}
        </Button>
      </DialogActions>
    </CustomDialog>
  );
};

export default React.memo(ConfirmationDialog);
