import React, { Component } from 'react';
import './App.css';

const people = [
  {
    id: 1,
    first: "Milda",
    last: "Trumpaityte",
    age: 25
  },
  {
    id: 2,
    first: "Egle",
    last: "Trumpaityte",
    age: 27
  },
  {
    id: 3,
    first: "Jens",
    last: "Jensen",
    age: 38
  },
  {
    id: 4,
    first: "Niels",
    last: "Nielsen",
    age: 42
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
    {
      people.map(person =>
          <div key={person.id}>
            <h1>{person.first}</h1>
            <h2>{person.last}</h2>
            <h3>{person.age}</h3>
          </div>
        
      )
    }
      </div>
    );
  }
}

export default App;
