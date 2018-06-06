import React, { Component } from 'react';
import { rooms, start as currentRoom } from '../rooms';
// import Player from './Player';
import Room from './Room';

export default class Game extends Component {

  state = {
    player: {
      name: 'Player 1',
      inventory: []
    },
    rooms,
    currentRoom
  };

  handleMove = roomKey => {
    this.setState(prevState => ({
      currentRoom: prevState.rooms[roomKey],
    }));
  };

  render() {
    const { currentRoom } = this.state;

    return (
      <section>
        <h2>Cabin of Horrors</h2>
        <Room room={currentRoom}
          onMove={this.handleMove}/>
      </section>
    );
  }
}