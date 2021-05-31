import React from "react";

import { makeAutoObservable } from "mobx";

export interface IComment {
  email: string;
  comment: string;
  country: string;
}

class CommentsStore {
  comments: IComment[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addComment = (comment: IComment) => {
    this.comments = [...this.comments, comment];
  };
}

export default React.createContext(new CommentsStore());
