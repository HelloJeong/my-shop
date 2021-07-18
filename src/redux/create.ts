import { applyMiddleware, createStore } from "redux";
import history from "../history";
import reducer from "./modules/";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import rootSaga from "./modules/rootSaga";

const create = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer(history),
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default create;
