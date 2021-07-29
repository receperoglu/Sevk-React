import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./MainPage";
import { SevkProvider } from "./store/context";

ReactDOM.render(
  <SevkProvider>
    <MainPage />
  </SevkProvider>,
  document.getElementById("root")
);
