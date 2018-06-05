import React, { Component } from 'react';

export default class Room extends Component {

    static propTypes = {
        room: PropTypes.object,
        onMove: PropTypes.func.isRequired
    }

    render() {
        const { room } = this.props;
        const { title, description, image, doors } = room;

        return (
            <section>
                <ul>
                    {Object.entries(doors).map(([direction, roomKey]) => {
                        return (
                            <li key="direction"></li>
                        );
                    })}
                    </ul>
                    </section>
        );
    }
}