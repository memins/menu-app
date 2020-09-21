import React, { Component } from "react";
import MainMenu from "./MainMenu";

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <MainMenu />
        <main>{this.props.children}</main>
      </div>
    );
  }
}
