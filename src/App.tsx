import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AppBar from "./components/AppBar";
import HomePage from "./pages/HomePage";
import CommentPage from "./pages/CommentPage";
import FilesPage from "./pages/FilesPage";
import Box from "@material-ui/core/Box";

const App = () => (
  <>
    <AppBar />
    <Box width="100%" height={16} />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/comment" component={CommentPage} />
      <Route exact path="/files" component={FilesPage} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
