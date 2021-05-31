import React from "react";

import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

import commentScheme from "../schemas/comment";
import CommentForm from "../components/CommentForm";

import CommentsStore, { IComment } from "../store/CommentsStore";

const AddCommentView = () => {
  const history = useHistory();
  const commentsStore = React.useContext(CommentsStore);
  const { addComment } = commentsStore;

  const handleCommit = React.useCallback(
    (data: IComment) => {
      addComment(data);
      history.push("/");
    },
    [addComment, history]
  );

  return <CommentForm scheme={commentScheme} onCommit={handleCommit} />;
};

export default observer(AddCommentView);
