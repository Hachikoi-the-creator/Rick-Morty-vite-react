import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.scss";
// extra stuff
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider {...{ store }}>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </Provider>
);
