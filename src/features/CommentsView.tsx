import React from "react";

import { observer } from "mobx-react-lite";

import CommentsGrid from "../components/CommentsGrid";
import CommentsStore from "../store/CommentsStore";

const CommentsView = () => {
  const commentsStore = React.useContext(CommentsStore);
  const { comments } = commentsStore;

  return <CommentsGrid comments={comments} />;
};

export default observer(CommentsView);
