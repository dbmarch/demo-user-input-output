import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'

class App extends Component {
  state = {username: 'Sam'};

  InputChangedHandler= (event) => {
    console.log (event.target.value);
    this.setState({username: event.target.value});
  }
  
  
  render() {
    return (
      <div className="App">
         <UserInput userInput = {this.InputChangedHandler} 
                     username = {this.state.username}/>
         <UserOutput username = {this.state.username}/>
         <UserOutput username = {this.state.username}/>
      </div>
    );
  }
}

export default App;
