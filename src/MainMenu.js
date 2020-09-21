import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MainMenu extends Component {
  render() {
    let submenu = null;
    if (/^\/profile/.test(this.props.path)) {
      submenu = (
        <div>
          <Link to="/profile/submenu-1">Submenu 1</Link>
          <Link to="/profile/submenu-2">Submenu 2</Link>
        </div>
      );
    }
    return (
      <div>
        <div>
          <Link to="/">Home</Link>
          {"\u00a0"}~{"\u00a0"}
          <Link to="/about">About</Link>
          {"\u00a0"}~{"\u00a0"}
          <Link to="/contact">Contact</Link>
          {"\u00a0"}~{"\u00a0"}
          <Link to="/profile">Profile</Link>
        </div>
        {submenu}
      </div>
    );
  }
}
