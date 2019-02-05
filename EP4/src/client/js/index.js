"use script";
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "../css/index.css";

ReactDOM.render(
  <BrowserRouter>
    <App content="HI" />
  </BrowserRouter>,
  document.getElementById("app-root")
);
