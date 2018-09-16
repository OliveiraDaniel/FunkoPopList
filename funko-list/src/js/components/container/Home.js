import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import List from "./List"

class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: "funkos"
    };
  }

  render() {
    return (
      <div>
        <Header />
        <List />
      </div>
    );
  }
}
export default Home;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;