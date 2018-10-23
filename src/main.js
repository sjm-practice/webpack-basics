import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class Message extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

render(
  <Message title="Email Joe" message="Can you email him?" />, 
  document.getElementById("react-container")
);
