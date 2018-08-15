import React, { Component } from "react";
import NavBar from "./components/layout/NavBar";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid navbar-off-set" />
      </div>
    );
  }
}

export default App;
