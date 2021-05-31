import React from "react";

export interface DialogMethods<State = unknown> {
  open: boolean;
  state: State | null;
  openDialog: (payload?: State | null) => void;
  closeDialog: (payload?: State | null) => void;
}

export default <State>(defaultState?: State) => {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState<State | null>(defaultState ?? null);

  const openDialog: DialogMethods<State>["openDialog"] = (payload) => {
    if (payload) setState(payload);
    setOpen(true);
  };

  const closeDialog: DialogMethods<State>["closeDialog"] = (payload) => {
    if (payload) setState(payload);
    setOpen(false);
  };

  return {
    open,
    state,
    openDialog,
    closeDialog
  };
};
