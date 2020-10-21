import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
state = {
  persons: [
    {name: 'Andrew', age: 26, hobby: 'fishing'},
    {name: 'teddy', age: 21, hobby: 'sleep'},
    {name: 'buddy', age: 31, hobby: 'eat'},

  ]
}

switchNameHandler = () => {
  // console.log ("clicked")
  this.setState({
    persons: [{name: 'Alehandro', age: 26, hobby: 'fishing'},
    {name: 'teddy', age: 21, hobby: 'sleep'},
    {name: 'buddy', age: 31, hobby: 'eat'}
  ]
  })
}
  render() {
    return (
      <div className="App">
     <h1>Hello World</h1>
     <button onClick={this.switchNameHandler}> switch name </button>
    <Person name={this.state.persons[0].name} age={this.state.persons[0].age} hobby={this.state.persons[0].hobby}/>
    <Person name={this.state.persons[1].name} age={this.state.persons[1].age} hobby={this.state.persons[1].hobby}/>
    <Person name={this.state.persons[2].name} age={this.state.persons[2].age} hobby={this.state.persons[2].hobby} />

      </div>
    );
  }
}

export default App;
