import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>
);
