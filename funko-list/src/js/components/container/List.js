import React, { Component } from "react";
import FormFunko from './FormFunko'

class List extends Component {
    constructor(props) {
			super(props);
			this.FormAndList = React.createRef();
      this.state = {
				list: [],
	  	};
	}

	componentDidMount() {
		this.loadListFunko();
	}

	
	loadListFunko (){
		return(
			this.state.list.map(function(data, key){
				return <li key={key} className='item-list'>
					<div className='conteiner-list'>
						<img src={data.image} />
						<span className='title-list'>{data.name}</span>
						<small className='date-list'>{data.date}</small>
					</div>
				</li>
			})
		)
	}
  
    render() {
      return (
        <div className='list-funkos'>
					<h1 style={{textAlign:'center'}}>Cadastre seu Funko Pop</h1>
					<FormFunko  
						reloadList={this.loadListFunko}
						listProps={this.state.list}
					/>
        </div>
      );
    }
  }
  export default List;