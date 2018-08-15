import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import AddTrip from "./components/forms/AddTrip";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid navbar-off-set">
          <Switch>
            <Route
              exact
              path="/addtrip"
              render={props => <AddTrip {...props} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
