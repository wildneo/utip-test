import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import CommentsView from "../features/CommentsView";

const Home = () => (
  <Container maxWidth="md">
    <Grid container direction="column" alignItems="center">
      <CommentsView />
    </Grid>
  </Container>
);

export default Home;
