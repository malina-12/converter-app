import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Converter from "./components/Converter";
import RateSettings from "./components/RateSettings";
import { STORE } from './components/consts';
import { HOMEPAGE, SETTINGS } from './components/consts'

import "./index.css";

ReactDOM.render(
  <Provider store={STORE}>
    <Router>
      <App>
        <Router>
          <Switch>
            <Route exact path={HOMEPAGE} component={Converter} />
            <Route path={SETTINGS} component={RateSettings} />
          </Switch>
        </Router>
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
