import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';
import UserOutput from './Person/User/UserOutput';


class App extends Component {
state = {
  users: ["andrew", "jake"]
 
}

  render() {
    return (
      <div className="App">
     <h1>Hello World</h1>
    <UserOutput userName={this.state.users[0]}/>
    <UserOutput userName={this.state.users[1]}/>

      </div>
    );
  }
}

export default App;
