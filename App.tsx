import React from "react";
import Timer from "./components/Timer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducer";

let store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  );
}
