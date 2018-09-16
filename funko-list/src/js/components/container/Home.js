import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import List from "./List"

class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: "funkos",
      styles : `
        .list-funkos{
			width: 480px;
			display: block;
			margin: 30px auto;
        }

        .conteiner-input{
			display: block;
			margin: 10px 0 5px 0;
        }

        .label-input{
			display:block;
        }

        .input-funko{
			display: block;
			width: 100%;
			border: 1px solid #bdb2b2;
			padding: 5px;
			border-radius: 5px;
			margin-bottom:5px;
        }

        .btn-send{
			background: #e73e25;
			border: none;
			color: #fff;
			padding: 10px;
			border-radius: 5px;
			font-weight: bold;
			width: 50%;
			margin: 25px auto;
			display: block;
        }
	 	  `
    };
  }

  render() {
    return (
      <div>
        <style>{this.state.styles}</style>
        <Header />
        <List />
      </div>
    );
  }
}
export default Home;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;