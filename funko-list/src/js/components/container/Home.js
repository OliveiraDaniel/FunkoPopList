import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import List from "./List"
import FormFunko from "./FormFunko";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: "funkos",
      styles : `
        .list-funkos{
          width: 90%;
          display: block;
          margin: 30px auto;
          position: relative;
        }

      .form-funko{
        width: 430px;
        display: block;
        margin: 30px auto;
        height: auto;
        position: relative;
      }

      .conteiner-showcase{
        display: block;
        margin: 40px auto;
        position: relative;
        height: auto;
        width: 92%;
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
          text-align: center;
          cursor: pointer;
        }
      
      .item-list{
        width:228px;
        height:235px;
        display:inline-block;
        margin:10px;
        float:left;
        border:1px solid #e3e3e3;
      }

      .item-list:hover{
        box-shadow: 0px 0px 5px 1px #d6d4d4;
      }

      .title-list{
        display:block;
        font-weight:bold;
        text-align:center;
        margin: 15px 0;
      }

      .item-list img{
        display:block;
        width:200px;
        margin: 5px;
      }

      .date-list{
        display:block;
        font-size:10px;
        color:#333333;
        text-align:center;
      }
      .load-img{
        width:150px;
        height:150px;
        position:absolute;
        top:50%;
        left:50%;
        margin-left:-75px;
        margin-top:-75px;
        z-index:999999;
        display:none;
      }
      .load-img img{
        display:block;
        width:150px;
      }
      .load-img.show{
        display:block;
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