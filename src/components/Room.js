import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Door from './Door';
import Riddle from './Riddle';
// import ChooseItem from './ChooseItem';
// import styles from './Room.css';

export default class Room extends Component {

    static propTypes = {
      room: PropTypes.object,
      onMove: PropTypes.func.isRequired,
      onPickup: PropTypes.func.isRequired
    };

    render() {
      const { room, onMove, onPickup } = this.props;
      const { title, description, image, doors, question, answer } = room;

      return (
        <section style={{ backgroundImage: `url(${image})` }}>
          <h3>{title}</h3>
          <p>{description}</p>
          <Riddle question={question} answer={answer} onAnswer={onPickup}/>
          <h4>Doors</h4>
          <ul className="doors">
            {Object.entries(doors).map(([direction, roomKey]) => {
              return <Door
                key={direction}
                direction={direction}
                onOpen={() => onMove(roomKey)}/>;
            })}
          </ul>
        </section>
      );
    }
}