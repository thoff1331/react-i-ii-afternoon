import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import From from './From.js';
import data from './data.js';



class App extends Component {
  constructor() {
   super();
this.state = {
  index: 0,

}
}
  render() {
    return (
      
      <div>
      <div className='Header' />
      <div className='boxone'>
      <div className='name'>
      <div className='titles'>
      <From index={this.state.index} />
      <div></div>
      </div>
      </div>
      </div>
      <button className='home'> Home </button>
      <button className='new'>New</button>
      <button className='edit'>Edit</button>
      <button className='delete'>delete</button>
      <button onClick={() => this.setState({index:(this.state.index + 1)  % 25})} className='next'> Next > </button>
      <button onClick={() => this.setState({index: this.state.index -1 < 0 ? 24:this.state.index - 1})} className='previous'> {'< Previous'} </button>
      <button onClick={() => this.setState({index:(this.state.index + 1) % 25})} className='number'> {this.state.index + 1} / 25</button>
        </div>
    );
  }
}

export default App;
