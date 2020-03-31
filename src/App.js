import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.getRandomInt = this.getRandomInt.bind(this);
    this.state = {
      random_num: this.getRandomInt(1,50),
      name: ''
    }
  }
  
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  };

  
  componentDidMount() {
    fetch(`https://swapi.co/api/people/${this.state.random_num}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name
        })
      }
    )
  };
  
  render() {

    const { random_num, name } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={`https://robohash.org/${random_num}?set=set5`} />
          {
            name === '' ? 
              <h2> Loading a Star Warrior for you... </h2>
            :
              <h2>
                Hey {name}
              </h2>
          }
          
        </header>
      </div>
    );
  }
}

export default App;
