import React, { Component } from "react";

class FormFunko extends Component {
    constructor(props) {
      super(props);
      this.FormAndList = React.createRef();
      this.state = {
        list: this.props.listProps,
        inputName:'',
        inputUrl: '',
        inputDate: '',
      };
      this.onInputName = this.onInputName.bind(this);
      this.onInputUrl = this.onInputUrl.bind(this);
      this.onInputDate = this.onInputDate.bind(this);
      this.addItem = this.addItem.bind(this);
      console.log(this.state.list);
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

    onInputName(e) {
        this.setState({ inputName: e.target.value });
    }

    onInputUrl(e) {
        this.setState({ inputUrl: e.target.value });
    }

    onInputDate(e) {
        this.setState({ inputDate: e.target.value });
    }

    addItem() {
        const toAddName = this.state.inputName;
        const toAddUrl = this.state.inputUrl;
        const toAddDate = this.state.inputDate;
        const newList = [...this.state.list]
        newList.push({
            name:toAddName,
            image:toAddUrl,
            date:toAddDate,
        })

        this.setState({
            list:newList
        });
        
    }
  
    render() {
      return (
        <div>
            <div className='form-funko'>
                <form>
                    <div className='conteiner-input'>
                        <label className='label-input'>Nome do Personagem:</label>
                        <input value={this.state.inputName} onChange={this.onInputName} className='input-funko'type='text' placeholder='Digite o nome do personagem'></input>
                    </div>
                    <div className='conteiner-input'>
                        <label className='label-input'>URL da imagem:</label>
                        <input value={this.state.inputUrl} onChange={this.onInputUrl} className='input-funko'type='text' placeholder='Insira a URL da imagem'></input>
                    </div>
                    <div className='conteiner-input'>
                        <label className='label-input'>Data de compra:</label>
                        <input value={this.state.inputDate} onChange={this.onInputDate} className='input-funko'type='text' placeholder='Insira a data da compra'></input>
                    </div>
                    <div className='conteiner-input'>
                        <span onClick={this.addItem} className='btn-send' value='Cadastrar'>Cadastrar</span>
                    </div>
                </form>
            </div>
            <div>
                <ul className='conteiner-showcase'>
                    {this.loadListFunko()}
                </ul>
            </div>
        </div>
      );
    }
  }
  export default FormFunko;