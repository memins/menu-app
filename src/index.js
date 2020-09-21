import React from "react";
import ReactDOM from "react-dom";
import data from "./menu.json";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const renderMenu = (items) => {
  return (
    <ul>
      {items.map((i) => {
        return (
          <li>
            <a href={i.link}>{i.title}</a>
            {i.menu && renderMenu(i.menu)}
          </li>
        );
      })}
    </ul>
  );
};

const Menu = ({ data }) => {
  return (
    <nav>
      <h2>{data.title}</h2>
      {renderMenu(data.menu)}
    </nav>
  );
};

ReactDOM.render(<Menu data={data} />, document.getElementById("container"));
