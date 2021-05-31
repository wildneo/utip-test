import React from "react";

import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ClearIcon from "@material-ui/icons/Clear";
import PdfIcon from "@material-ui/icons/PictureAsPdf";
import ImageIcon from "@material-ui/icons/PhotoLibrary";

import { IFile } from "../../store/filesStore";

interface FileListItemProps {
  file: IFile;
  onRemove: (file: IFile) => void;
}

const FileListItem = (props: FileListItemProps) => {
  const { file, onRemove } = props;

  const handleClick = () => {
    onRemove(file);
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{file.type === "pdf" ? <PdfIcon /> : <ImageIcon />}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={file.name} />
      <ListItemSecondaryAction>
        <IconButton onClick={handleClick}>
          <ClearIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default React.memo(FileListItem);
