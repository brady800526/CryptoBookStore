import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

import "./App.scss";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/detail" component={ProductDetail} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
