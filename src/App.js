import React, { Component } from 'react';
// import Person from './Person/Person'
import './App.css';
import UserOutput from './Person/User/UserOutput';
import UserInput from './Person/User/UserInput';


class App extends Component {
constructor() {
  super();
  this.state = {
    user1: "andrew",
    user2: "jake"
  }
}



  render() {
    return (
      <div className="App">
     <h1>Hello World</h1>
    <UserOutput userName={this.state.user1}/>
    <UserInput change={(event)=> {this.setState({user1: event.target.value})}}/>
    <UserOutput userName={this.state.user2}/>
    <UserInput change={(event)=> {this.setState({user2: event.target.value})}}/>
      </div>
    );
  }
}

export default App;
