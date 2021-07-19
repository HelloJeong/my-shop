import { ErrorBoundary } from "react-error-boundary";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import history from "./history";
import { getProducts as getProductsSagaStart } from "./redux/modules/product";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const getProducts = useCallback(() => {
    dispatch(getProductsSagaStart());
  }, [dispatch]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={Detail} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
