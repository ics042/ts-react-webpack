import { history, store } from "app/redux/Store";
import { About } from "app/views/about/About";
import { Home } from "app/views/home/Home";
import { Login } from "app/views/login/Login";
import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";

export const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
        </div>
      </ConnectedRouter>
    </Provider>
  );
};
