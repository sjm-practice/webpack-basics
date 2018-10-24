import React, { Component } from "react";
import { render } from "react-dom";

class About extends Component {
  render() {
    return <div>About us. </div>;
  }
}

render(
  <About />,
  document.getElementById("react-container")
);
