import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./redux/store.js";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("store", store);
root.render(

  <Provider store={store}>

    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>
);
