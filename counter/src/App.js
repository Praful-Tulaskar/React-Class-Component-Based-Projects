import './App.css';
import React, { Component } from 'react'


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      inputValue: ''
    }
  }
  
  handleInputValue = (element) => {
    this.setState({
      inputValue: parseInt(element.target.value)
    });
  }
  handleUpClick = () => {
    this.setState({
      inputValue: this.state.inputValue + 1
    })
  }
  
  handleDownClick = () => {
    if(this.state.inputValue !== 0){
      this.setState({
        inputValue: this.state.inputValue - 1
      })
    }
  }
  
  render() {
    // const { count, inputValue } = this.state;
    return (
      <div className='counter'>
        <button className='btn' onClick={this.handleUpClick}>+</button>
        <input type='number' value={this.state.inputValue} onChange={this.handleInputValue}/>
        <button className='btn' onClick={this.handleDownClick}>-</button>
      </div>
    )
  }
}





