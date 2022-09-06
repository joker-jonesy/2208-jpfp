import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store/index";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./redux/api/apiSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </BrowserRouter>
);
