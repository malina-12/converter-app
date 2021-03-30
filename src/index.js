import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CurrencyReducer from "./redux/СurrencyReducer";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Converter from "./components/Converter";
import RateSettings from "./components/RateSettings";

const store = createStore(
  CurrencyReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Router>
          <Switch>
            <Route exact path="/" component={Converter} />
            <Route path="/settings" component={RateSettings} />
          </Switch>
        </Router>
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
