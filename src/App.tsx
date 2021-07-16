import './App.css';
import { ErrorBoundary } from 'react-error-boundary';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Error from './pages/Error';
import history from './history';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/cart" component={Cart} /> 
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
