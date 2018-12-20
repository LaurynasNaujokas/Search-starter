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
];

function searchingFor(term){
    return function(x){
       return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
    };
}

class App extends Component {
  constructor(props){
    super(props);

      this.state= {
        people: people,
        term: ''
    };

    this.searchHandler = this.searchHandler.bind(this);
}

searchHandler(event){
  this.setState({
      term: event.target.value
  });
}

  render() {
    const {term, people} = this.state;
    return (
      <div className="App">
      <form>
        <input type="text"
            onChange={this.searchHandler}
            value={term}
        />
      </form>
    {
      people.filter(searchingFor(this.state.term)).map(person =>
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
