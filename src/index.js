import React from "react";
import ReactDOM from "react-dom";
import App from "./shared/App";
import reportWebVitals from "./reportWebVitals";
import './index.css';

import { Provider } from 'react-redux';
import store from './redux/configureStore';
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"));

reportWebVitals();
