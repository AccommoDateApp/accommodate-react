import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { App } from "./components/App";
import { rootReducer } from "./reducers";

// css import
import "antd/dist/antd.css";

const store: any = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const container = document.getElementById("app");

ReactDOM.render(app, container);
