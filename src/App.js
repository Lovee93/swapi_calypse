import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.getRandomInt = this.getRandomInt.bind(this);
    this.state = {
      random_num: this.getRandomInt(1,50),
      name: '',
      img_src: ''
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
          name: data.name,
          img_src: `https://robohash.org/${this.state.random_num}?set=set5`
        })
      }
    )
  };
  
  render() {

    const { random_num, name, img_src } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={img_src} />
          {
            img_src === '' ? 
              <h2> Loading a Star Warrior for you... </h2>
            :
              <h2>
                Hey 👋, {name}
              </h2>
          }
          
        </header>
      </div>
    );
  }
}

export default App;
