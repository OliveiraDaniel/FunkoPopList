import React, { Component } from "react";

class FormFunko extends Component {
    constructor() {
      super();
      this.state = {
        list: []
      };
    }
  
    render() {
      return (
        <div>
            <form>
                <div className='conteiner-input'>
                    <label className='label-input'>Nome do Personagem:</label>
                    <input className='input-funko'type='text' placeholder='Digite o nome do personagem'></input>
                </div>
                <div className='conteiner-input'>
                    <label className='label-input'>URL da imagem:</label>
                    <input className='input-funko'type='text' placeholder='Insira a URL da imagem'></input>
                </div>
                <div className='conteiner-input'>
                    <label className='label-input'>Data de compra:</label>
                    <input className='input-funko'type='text' placeholder='Insira a data da compra'></input>
                </div>
                <div className='conteiner-input'>
                    <button className='btn-send' value='Cadastrar'>Cadastrar</button>
                </div>
            </form>
        </div>
      );
    }
  }
  export default FormFunko;