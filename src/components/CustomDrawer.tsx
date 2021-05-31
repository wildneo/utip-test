import React from "react";

import { useHistory } from "react-router-dom";
import { invoke } from "lodash";

import SwipeableDrawer, {
  SwipeableDrawerProps
} from "@material-ui/core/SwipeableDrawer";

import SidebarMenu from "./SidebarMenu";

const CustomDrawer = (props: SwipeableDrawerProps) => {
  const history = useHistory();

  const handleItemClick = React.useCallback(
    (path: string) => {
      invoke(props, "onClose", {});
      history.push(path);
    },
    [history]
  );

  return (
    <SwipeableDrawer {...props}>
      <SidebarMenu onItemClick={handleItemClick} />
    </SwipeableDrawer>
  );
};

export default CustomDrawer;
