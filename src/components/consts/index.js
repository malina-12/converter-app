import { createStore } from "redux";
import CurrencyReducer from "../../redux/СurrencyReducer";

export const STORE = createStore(
  CurrencyReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const HOMEPAGE = '/';
export const SETTINGS = '/settings';