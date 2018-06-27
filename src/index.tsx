import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { App } from "./components/App";
import { rootReducer } from "./reducers";

// css import
import "antd/dist/antd.css";

declare var window: {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (...args: any[]) => any;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store: any = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const container = document.getElementById("app");

ReactDOM.render(app, container);
