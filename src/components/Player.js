import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChooseItem from '.ChooseItem';

export default class Player extends Component {

    static = {
        propTypes: {
            player: Proptypes.object.isRequired,
            onChoose: Proptypes.func. isRequired
        }
    }
}