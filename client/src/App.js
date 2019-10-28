import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import Routes from "./routing/Routes";
import jwt_decode from "jwt-decode";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { setCurrentUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
  const decoded = jwt_decode(localStorage.token);

  store.dispatch(setCurrentUser(decoded));
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <Route component={Routes} />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}
