import React, { Component } from "react";
import { render } from "react-dom";

class Contact extends Component {
  render() {
    return <div>Contact us. </div>;
  }
}

render(
  <Contact />,
  document.getElementById("react-container")
);
