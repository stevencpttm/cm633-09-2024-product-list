import React, { Component } from "react";
import ThemeContext from "./ThemeContext";

class ListItem extends Component {
  onClickHandler = () => {
    this.props.onChange(this.props.name);
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => {
          return (
            <li
              onClick={this.onClickHandler}
              className={`px-6 py-4 rounded-lg shadow hover:cursor-pointer transition ${
                this.props.active ? "bg-slate-800 text-white" : "bg-white"
              } ${theme === "light" ? "bg-white" : "bg-blue-500 text-white"}`}
            >
              {this.props.name}
            </li>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

// <ListItem name="iPhone" />

export default ListItem;
