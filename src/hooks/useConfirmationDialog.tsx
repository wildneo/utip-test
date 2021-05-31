import React from "react";

import ConfirmationDialog from "../components/ConfirmationDialog";
import useDialog from "./useDialog";

interface useConfirmationDialogProps {
  bodyText: React.ReactNode;
  commitText: string;
  cancelText: string;
  onCommit: () => void;
}

export default function useConfirmationDialog(
  props: useConfirmationDialogProps
) {
  const { bodyText, commitText, cancelText, onCommit } = props;
  const { open, closeDialog, openDialog } = useDialog();

  const handleCommit = () => {
    closeDialog();
    onCommit();
  };

  const Dialog = React.useCallback(
    () => (
      <ConfirmationDialog
        open={open}
        onCancel={closeDialog}
        onCommit={handleCommit}
        commitText={commitText}
        cancelText={cancelText}
      >
        {bodyText}
      </ConfirmationDialog>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [open]
  );

  return { Dialog, openDialog };
}
