import { Component } from 'react';

import Greeting from './components/greeting/greeting.component';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    console.log('constructor');

    this.state = {
      name: {
        firstName: 'Leonel',
        lastName: 'Messi'
      },
      club: 'PSG',
      players: [],
      filterString: ''
    };
  }

  componentDidMount() {
    console.log('componentDidMount');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { players: users };
          },
          () => {
            console.log(this.state.players);
          }
        );
      });
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState(() => {
      return {
        filterString: event.target.value.toLocaleLowerCase()
      };
    });
  };

  onNameChange = (event) => {
    console.log('change name');

    this.setState(() => {
      return {
        name: { firstName: 'Neymar', lastName: 'Jr' }
      };
    });
  };

  render() {
    console.log('render');
    const filteredPlayers = this.state.players.filter((player) => {
      return player.name.toLowerCase().includes(this.state.filterString);
    });

    return (
      <div className="App">
        <h1 className="app-title">Player Rolodex</h1>

        <Greeting
          playerName={this.state.name}
          onNameChangeHandler={this.onNameChange}
        />
        <hr></hr>

        <SearchBox
          searchClassName="search-box"
          searchPlaceholder="search player"
          onSearchChangeHandler={this.onSearchChange}
        />
        <CardList players={filteredPlayers} />
      </div>
    );
  }
}

export default App;
