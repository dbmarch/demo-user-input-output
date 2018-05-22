import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';
import Validation from './Components/Validation';
import Char from './Components/Char';

class App extends Component {
  state = {username: 'Sam',
           input_2: ''
           };

  InputChangedHandler= (event) => {
    // console.log (event.target.value);
    this.setState({username: event.target.value});
  }
  
  InputListener = (event) => {
    // console.log (event.target.value);
    this.setState({input_2: event.target.value});
  }
  
  charRemover = (id) => {
    const cArr = this.state.input_2.split("");
    cArr.splice(id,1);
    let newString = cArr.join('');
    this.setState ({input_2: newString});
  }
  
  charArrayGenerator = () => {
    const cArr = this.state.input_2.split("");
    const map1 = cArr.map ((x,id) => 
        <Char char = {x}  
              click = {() => {this.charRemover(id)}}
              key = {id} />);
    //console.log (map1);
    return  map1;
  }
  
  render() {
  //  let charlist = this.charArrayGenerator();

    return (
      <div className="App">
         <input onChange = {this.InputListener}  id="inputField" 
            type = 'text' value={this.state.input_2}/>
         <p> Length = {this.state.input_2.length} </p>
         <Validation input = {this.state.input_2} />
          { this.charArrayGenerator() }
         <UserInput userInput = {this.InputChangedHandler} 
                     username = {this.state.username}/>
         <UserOutput username = {this.state.username}/>
         <UserOutput username = {this.state.username}/>
      </div>
    );
  }
}

export default App;
