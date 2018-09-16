import React, { Component } from "react";
import FormFunko from './FormFunko'

class List extends Component {
    constructor() {
      super();
      this.state = {
		list: [],
	  };
    }
  
    render() {
      return (
        <div className='list-funkos'>
			<h1>Cadastre seu Funko Pop</h1>
			<FormFunko />
        </div>
      );
    }
  }
  export default List;