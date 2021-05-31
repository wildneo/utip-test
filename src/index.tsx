import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import CssBaseline from "@material-ui/core/CssBaseline";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider>
        <CssBaseline />
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
