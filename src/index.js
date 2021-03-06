import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import App from "./App";
import ContextPorvider from "./components/Store/ContextPorvider";

// import i18n (needs to be bundled ;))
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextPorvider>
      <App />
    </ContextPorvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
