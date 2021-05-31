import React from "react";

import { matchPath, useLocation } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CommentIcon from "@material-ui/icons/Comment";

export interface PageConst {
  key: string;
  name: string;
  pathname: string;
  icon: React.ReactNode;
}
export const PAGES: PageConst[] = [
  {
    key: "home",
    name: "Главная",
    pathname: "/",
    icon: <HomeIcon />
  },
  {
    key: "comment",
    name: "Комментарий",
    pathname: "/comment",
    icon: <CommentIcon />
  },
  {
    key: "files",
    name: "Документы",
    pathname: "/files",
    icon: <CloudUploadIcon />
  }
];

const match = (path: string, pathToCompare: string) => {
  const test = matchPath(path, {
    path: pathToCompare,
    exact: true
  });

  return Boolean(test);
};

export interface SidebarMenuProps {
  onItemClick: (pathname: string) => void;
}

const SidebarMenu = (props: SidebarMenuProps) => {
  const { onItemClick } = props;
  const { pathname } = useLocation();

  const handleClick = (pathname: string) => () => {
    onItemClick(pathname);
  };

  return (
    <List>
      {PAGES.map((page) => (
        <ListItem
          onClick={handleClick(page.pathname)}
          button
          selected={match(pathname, page.pathname)}
          key={page.key}
        >
          <ListItemIcon>{page.icon}</ListItemIcon>
          <ListItemText primary={page.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarMenu;
