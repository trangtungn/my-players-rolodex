import { Component } from 'react';

class Card extends Component {
  render() {
    const { id, name, email } = this.props.player;

    return (
      <div className="card-container" key={id}>
        <img
          alt={`player ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
