import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Door from './Door';
// import ChooseItem from './ChooseItem';
// import styles from './Room.css';

export default class Room extends Component {

    static propTypes = {
      room: PropTypes.object,
      onMove: PropTypes.func.isRequired
    };

    render() {
      const { room, onMove } = this.props;
      const { title, description, image, doors } = room;

      return (
        <section style={{ backgroundImage: `url(${image})` }}>
          <h3>{title}</h3>
          <p>{description}</p>
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