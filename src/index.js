import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reduxFirebase(fbConfig)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
