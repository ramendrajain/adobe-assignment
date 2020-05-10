import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import ProductListing from "./pages/ProductListing";
import Checkout from "./pages/Checkout";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;
