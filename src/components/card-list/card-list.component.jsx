import { Component } from 'react';

import Card from '../card/card.component';

import './card-list.styles.css';

class CardList extends Component {
  render() {
    const { players } = this.props;

    return (
      <div className="card-list">
        {players.map((player) => {
          return <Card player={player} />;
        })}
      </div>
    );
  }
}

export default CardList;
