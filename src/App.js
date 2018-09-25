import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


export default class App extends Component {
   constructor(props) {
    super(props);
   
   this.state = {
     count: 0,
   }

   this.onIncrement = this.onIncrement.bind(this);
   this.onDecrement = this.onDecrement.bind(this);

 }
   
   onIncrement(){
     this.setState(state => ({ count: state.count + 1}));
   }
    onDecrement(){
     this.setState(state => ({ count: state.count - 1}));
   }
   


    render() {

    return (
      <div>
        <span>{this.state.count}</span>

        <button onClick={this.onIncrement} type="button">Increment</button>
        <button onClick={this.onDecrement} type="button">Decrement</button>
      </div>
    );
  }
}


