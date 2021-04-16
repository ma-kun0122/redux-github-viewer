import { ConnectedRouter } from "connected-react-router";
import * as History from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import createStore from "./reducks/store/store";

const history = History.createBrowserHistory();
export const store = createStore(history); //ここでcreateScoreを実行して初めてストアが作られている

// console.log(store.getState()); /// "SHOW_ALL"
// store.dispatch(setVisibilityFilter("SHOW_COMPLETED"));
// console.log(store.getState()); /// "SHOW_COMPLETED"
// store.subscribe(() => console.log(store.getState())); //storeの中身が変わると検知して関数実行

ReactDOM.render(
  <Provider store={store}>
    {/* ここでAppコンポーネントがストアを参照できるようにしている */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
