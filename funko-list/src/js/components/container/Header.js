import React, { Component } from "react";
import ReactDOM from "react-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      listFunkos: []
    };
  }

  render() {
    return (
      <div className='header'
        style={{
            width:'100%', 
            height:'168px', 
            display: 'block', 
            background:"url('https://www.funko.com/static/media/blog-header.c1b7febe.jpg')",
            backgroundSize: '100%',
        }}>
            <img src='https://www.funko.com/directus/00000000277.png'
                style={{
                    display:'block',
                    margin:'auto',
                }}
            />
      </div>
    );
  }
}
export default Header;