import React, { Component } from "react";

class ListItem extends Component {
  onClickHandler = () => {
    this.props.onChange(this.props.name);
  };

  render() {
    return (
      <li
        onClick={this.onClickHandler}
        className={`px-6 py-4 rounded-lg shadow hover:cursor-pointer transition ${
          this.props.active ? "bg-slate-800 text-white" : "bg-white"
        }`}
      >
        {this.props.name}
      </li>
    );
  }
}

// <ListItem name="iPhone" />

export default ListItem;
