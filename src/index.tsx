import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { AppRoutes } from "./components/routes/AppRoutes";
import { rootReducer } from "./reducers";

// css import
import "antd/dist/antd.css";

const store: any = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

const container = document.getElementById("app");

ReactDOM.render(app, container);
