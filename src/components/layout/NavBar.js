import React, { Component } from "react";
import { Link } from "react-router-dom";

class componentName extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href={null}>
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="addtrip" className="nav-link">
                Add Trip
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={null}>
                Vew Trip
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default componentName;
