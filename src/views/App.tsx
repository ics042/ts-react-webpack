import { history, store } from "app/redux/Store";
import HomePage from "app/views/HomePage";
import * as React from "react";
import { Provider } from "react-redux";
import { Route, Router } from "react-router-dom";

export const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Route path="/" component={HomePage} />
        </div>
      </Router>
    </Provider>
  );
};
