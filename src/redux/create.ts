import { applyMiddleware, createStore } from "redux";
import history from "../history";
import reducer from "./modules/";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";

const create = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer(history),
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
    )
  );
  // sagaMiddleware.run();
  return store;
};

export default create;
