import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import AddCommentView from "../features/AddCommentView";

const CommentPage = () => (
  <Container maxWidth="md">
    <Grid container direction="column" alignItems="center">
      <AddCommentView />
    </Grid>
  </Container>
);

export default CommentPage;
