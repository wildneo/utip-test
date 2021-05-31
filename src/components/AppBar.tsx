import React from "react";

import { useLocation } from "react-router-dom";

import MUIAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { PAGES, PageConst } from "./SidebarMenu";
import CustomDrawer from "./CustomDrawer";

const PAGES_MAP = PAGES.reduce(
  (acc, page) => ({ ...acc, [page.pathname]: page }),
  {} as { [key: string]: PageConst }
);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const AppBar = () => {
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MUIAppBar position="static">
      <Toolbar>
        <IconButton
          onClick={handleOpen}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          {PAGES_MAP[pathname as keyof typeof PAGES_MAP].name ?? ""}
        </Typography>
      </Toolbar>
      <CustomDrawer onOpen={handleOpen} onClose={handleClose} open={open} />
    </MUIAppBar>
  );
};

export default React.memo(AppBar);
