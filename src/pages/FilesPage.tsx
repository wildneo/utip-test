import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import FileUpload from "../features/FileUpload";
import FilesView from "../features/FilesView";

const FilesPage = () => (
  <Container maxWidth="md">
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item style={{ width: "100%" }}>
        <FileUpload />
      </Grid>
      <Grid item style={{ width: "100%" }}>
        <FilesView />
      </Grid>
    </Grid>
  </Container>
);

export default FilesPage;
