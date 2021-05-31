import React from "react";

import { observable, action, makeAutoObservable } from "mobx";

export interface IFile {
  id: number;
  name: string;
  size: number;
  type: "pdf" | "jpg";
}

export class FilesStore {
  files: IFile[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addFile = (file: IFile) => {
    this.files = [...this.files, file];
  };

  removeFile = (file: IFile) => {
    this.files = this.files.filter(({ id }) => id !== file.id);
  };

  clearFiles = () => {
    this.files = [];
  };
}
export default React.createContext(new FilesStore());
