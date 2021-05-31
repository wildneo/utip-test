import React from "react";

import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const CustomDialog = (props: DialogProps) => {
  const { fullScreen, ...rest } = props;
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      fullScreen={fullScreen && smallScreen}
      maxWidth="xs"
      fullWidth
      {...rest}
    />
  );
};

export default CustomDialog;
