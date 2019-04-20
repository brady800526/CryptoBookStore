import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact={true}
            path="/"
            render={() => (
              <div className="App">
                <Homepage />
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
