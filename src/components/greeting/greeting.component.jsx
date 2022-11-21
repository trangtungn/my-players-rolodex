import { Component } from 'react';

class Greeting extends Component {
  render() {
    const { firstName, lastName, club } = this.props.playerName;

    return (
      <header className="header">
        <p>
          Hi {firstName} {lastName}! I know you're playing for {club}.
        </p>
        <button onClick={this.props.onNameChangeHandler}>
          Change Player Name
        </button>
      </header>
    );
  }
}

export default Greeting;
